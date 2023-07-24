const express = require('express');
const fs = require('fs');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const zxcvbn = require('zxcvbn');
const bcrypt = require('bcrypt');
const path = require('path');
const uuid = require('uuid');
const mongoose = require('mongoose');
mongoose.connect(process.env.mdb, { useNewUrlParser: true, useUnifiedTopology: true });
const app = express();
const { validate } = require("email-validator");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '1000mb' }));
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set("views", "./public/views")
app.use(express.static('public'));
app.use(session({
  secret: process.env.secret,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: process.env.mdb, autoRemove: 'disabled' }),
  cookie: {maxAge: 2553418620000}
}));
                       
const dataDir = path.resolve(`${process.cwd()}${path.sep}public`);
const templateDir = path.resolve(`${dataDir}${path.sep}views`); 
const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
        path: req.path
    };
 res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
};

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
  id: String,
  privacy: String,
  values: Array,
  url: String,
  del: Boolean,
  arch: Boolean,
  topic: String,
  authorid: String
});

const Note = mongoose.model("Note", noteSchema);

const userSchema = new mongoose.Schema({
  username: String,
  avatar: String,
  email: String,
  password: String,
  notes: Array,
  bio: String,
  topics: Array,
  uuid: String
});

const User = mongoose.model("User", userSchema);

app.get('/', async(req, res) => {
res.status(200)
if (req.session?.loggedin) {
app.use(express.static('public/views'));
let user = await User.findOne({ uuid: req.session.loggedin.replace("loggedin=", "") });
 renderTemplate(res, req, 'main.ejs', { uuid: req.session.loggedin, notes: await Note.find({ authorid: req.session.loggedin, del: false, arch: false }), username: user.username, avatar: user.avatar || null });
}else{
res.sendFile('./public/landing.html', { root: __dirname });
}
});

app.get("/@:author/:id", async(req, res) => {
  res.status(200)
  let note = await Note.findOne({ author: req.params.author, id: req.params.id });
  if (!note) return await renderTemplate(res, req, "404.ejs", { url: `https://mniotgrhuntbjrujnwunbtjuenugnuoswn.mpq9isyesjeuib.repl.co/@${req.params.author}/${req.params.id}` });
  if (note.privacy === "private" && req.session.loggedin !== note.authorid) return await renderTemplate(res, req, "404.ejs", { url: `https://mniotgrhuntbjrujnwunbtjuenugnuoswn.mpq9isyesjeuib.repl.co/@${req.params.author}/${req.params.id}` });
  await renderTemplate(res, req, "note.ejs", {title: note.title, content: note.content, author: note.author, values: note.values, authorid: req.session.loggedin});
})

app.post("/newnote", async(req, res) => {
  res.status(200)
  let id = uuid.v4().replaceAll("-", "");
  let newNote = new Note({
    title: req.body.title,
    text: req.body.text,
    id: id,
    author: req.body.author,
    authorid: req.body.authorid,
    content: req.body.content,
    privacy: req.body.visible,
    values: req.body.values,
    url: `/@${req.body.author}/${id}`,
   del: false,
   arch: false,
  topic: req.body.topic || null
  });
  await newNote.save();
  await res.json({id: id});
});

app.get('/register', (req, res) => {
  res.status(200)
  if (!req.session?.loggedin) {
    res.sendFile('./public/register.html', { root: __dirname });
  } else {
    res.redirect("/");
  }
});

app.get('/login', (req, res) => {
  res.status(200)
  if (!req.session?.loggedin) {
    res.sendFile('./public/login.html', { root: __dirname });
  } else {
    res.redirect("/");
  }
});

app.get('/logout', (req, res) => {
  res.status(200)
  req.session.loggedin = null;
  res.redirect("/");
});
                 
app.get("/@:username", async(req, res) => {
  res.status(200)
  let user = await User.findOne({username: req.params.username});
  if (!user) return res.render("404.ejs");
  let topics = user.topics;
  await renderTemplate(res, req, "profile.ejs", { username: user.username, bio: user.bio || "No bio..", avatar: user.avatar, topics: topics, del: await Note.find({ author: user.username, del: true }), arch: await Note.find({ author: user.username, arch: true }), notes: await Note.find({author: user.username}) });
});

app.post("/logindata", async (req, res) => {
   res.status(200)
     const errors = [];
   let {
      emorus,
      password
   } = req.body;
   if (typeof emorus !== 'undefined' && emorus.includes(" ")) {
      errors.push("Email or username contains space");
   }
   const user = await User.findOne({
      $or: [{
         username: emorus
      }, {
         email: emorus
      }]
   });
   if (!user) {
      errors.push("User doesn't exists");
   }
   if (errors.length > 0) {
      res.json({
         errors: errors,
         ok: false
      });
   } else {
      const rightpw = bcrypt.compare(password, user.password);
      if (!rightpw) {
         res.json({
            errors: "Incorrect password",
            ok: false
         });
      } else {
         req.session.loggedin = user.uuid;
         res.json({
            ok: true
         });
      }
   }
});

app.post("/changes", async (req, res) => {
   res.status(200);
   req.body.author = req.body.author.replaceAll("@", "");
   let exdta = await Note.find({
      author: req.body.author
   }) || [];
   let old = exdta.filter(obj => obj.id === req.body.id)[0];
   let dtaobj = {
      thumb: req.body.values.filter(vu => vu.startsWith("#"))[0]?.replace("#", "") || null,
      title: req.body.values.filter(vu => vu.startsWith("!") && !vu.match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gm))[0].replace("!", ""),
      text: old.text,
      id: req.body.id,
      author: req.body.author,
      content: req.body.values.filter(vu => !vu.startsWith("!") && !vu.startsWith("#"))[0],
      url: `/@${req.body.author}`,
      id: req.body.id,
      privacy: old.privacy,
      values: req.body.values,
      authorid: req.body.authorid
   };
   await Note.findOneAndUpdate({
      id: req.body.id,
      author: req.body.author
   }, dtaobj);
   res.json({
      ok: true
   });
})
  
app.post('/registerdata', async (req, res) => {
  res.status(200)
  let uuiid = uuid.v4().replaceAll("-", "")+ uuid.v4().replaceAll("-", "")+ uuid.v4().replaceAll("-", "")+ uuid.v4().replaceAll("-", "")+ uuid.v4().replaceAll("-", "")+ uuid.v4().replaceAll("-", "")+ uuid.v4().replaceAll("-", "")+ uuid.v4().replaceAll("-", "")+ uuid.v4().replaceAll("-", "")+ uuid.v4().replaceAll("-", "");
  const errors = [];

  function isPassStrong(password) {
    const strength = zxcvbn(password).score;
    if (strength < 2) {
      errors.push("too weak password");
    }
  }

  let { username, email, password } = req.body;
  if (typeof username !== 'undefined' && username.includes(" ")) {
    errors.push("username contains space");
  }
  if (typeof email !== 'undefined' && email.includes(" ")) {
    errors.push("email contains space");
  }
  if (typeof email !== 'undefined' && validate(email) == false) {
    errors.push("Invalid email");
  }
  if (typeof username !== 'undefined' && !/^[a-zA-Z0-9]+$/.test(username)) {
    errors.push("username contains invalid characters");
  }

  let existingUsername = await User.findOne({username: username});
  if (existingUsername) errors.push("username already exists");

  let existingEmail = await User.findOne({email: email});
  if (existingEmail) errors.push("email already exists");

  isPassStrong(password);

  if (errors.length > 0) {
    res.json({ errors: errors, ok: false });
  } else {
    let hashedPassword = await bcrypt.hash(password, 10);
    let newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      avatar: "https://avatars.dicebear.com/api/adventurer-neutral/" + username + ".svg",
      topics: [],
      uuid: uuiid
    });
    await newUser.save();
    req.session.loggedin = uuiid;
    res.json({ ok: true, username: username });
  }
});

app.post("/del", async(req, res) => {
  res.status(200);
  const author = req.body.author;
  let notes = await Note.find({ author });

  const noteToDelete = notes.find(s => s.id === req.body.id);
  noteToDelete.del = true;
  await noteToDelete.save();
  if (req.body.id === "notes-container") res.json({ ok: false });
  else res.json({ ok: true });
});


app.post("/archive", async(req, res) => {
  res.status(200);
  const author = req.body.author;
  let notes = await Note.find({ author });

  const noteToDelete = notes.find(s => s.id === req.body.id);
  noteToDelete.arch = true;
  await noteToDelete.save();
  if (req.body.id === "notes-container") res.json({ ok: false });
  else res.json({ ok: true });
})

app.post("/newto", async(req,res) => {
  let uzr = await User.findOne({ username: req.body.uz });
  uzr.topics.push({name: req.body.va, id: uuid.v4(), ide: uuid.v4()});
  await uzr.save();
})

app.post("/addto", async(req,res) => {
  let uzr = await Note.findOne({ username: req.body.uz, id: req.body.id });
  uzr.topic = req.body.v;
  await uzr.save();
})
    
app.listen(3000, async() => {
console.log("Server Started")
});