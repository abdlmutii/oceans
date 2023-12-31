  <!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
    <title><%= title %> | Oceans</title>
    <meta property="og:title" content="<%= title %>">
<meta property="og:description" content="Our private notes service is a secure and user-friendly platform for taking notes and organizing your thoughts. try out!">
<meta property="og:type" content="website">
<meta name="theme-color" content="#00a8e6">
    <!-- <link rel="stylesheet" href="https://css.readmemd.repl.co/style.css"> -->
    <style>
        /*
  Style for: everything
  Thanks to the maker: Me
  Edits: Me
  Todo: []
  */

 html, body {
     margin: 0;
     padding: 0;
   overflow-x: hidden;
}
 .avatar {
     width: 30px;
     height: 30px;
     border-radius: 50%;
     margin-left: 300px;
     position: relative;
     top: 39px;
}
 body {
     background-color: rgb(18,19,25);
     font-family: 'Open Sans', sans-serif;
     color: white;
}
 .todo {
     font-size: 18px;
     width: 100%;
     font-family: Arial, sans-serif;
     background: none;
     outline: none;
     border: none;
     padding: none;
     margin: none;
     color: white;
     margin: 0 auto;
     display: block;
     width: 50%;
}
 input {
     border: none;
     outline: none;
     background: transparent;
     color: white;
}
 #noteWindow {
     background-color: #212532;
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     overflow-x: hidden;
}
 #createit i {
     font-size: 20px;
     margin-left: 20px;
}
 #noteWindow #titleofnote {
     -webkit-appearance: none;
     -moz-appearance: none;
     -ms-appearance: none;
     -o-appearance: none;
     appearance: none;
     font-size: 40px;
     width: 100%;
     background: none;
     outline: none;
     border: none;
     color: white;
     margin: 0 auto;
     display: block;
     width: 50%;
     margin-bottom: 1px;
     margin-top: 10px;
}
 #noteWindow .desofnote, #desofnote {
     -webkit-appearance: none;
     -moz-appearance: none;
     -ms-appearance: none;
     -o-appearance: none;
     appearance: none;
     font-size: 18px;
     width: 100%;
     font-family: Arial, sans-serif;
     background: none;
     outline: none;
     border: none;
     padding: none;
     margin: none;
     color: white;
     margin: 0 auto;
     display: block;
     width: 50%;
}
 #notes-container a {
     color: #DDDEDE;
     text-decoration: none;
     font-size: 16px;
     margin-bottom: 10px;
     display: block;
}
 #notes-container a:hover {
     color: #fff;
}
 .note-title {
     font-size: 22px;
     margin-bottom: 10px;
     text-decoration: none;
     color: #DDDEDE;
}
 .note-description {
     font-size: 16px;
     color: #5E5E6D;
}
 #notes-container {
     width: 100%;
     display: flex;
     flex-wrap: wrap;
     align-content: flex-start;
       margin-left: 23px;
}
 @media only screen and (min-width: 768px) {
    /* pc */
     .sein {
         -webkit-appearance: none;
         -moz-appearance: none;
         -ms-appearance: none;
         -o-appearance: none;
         appearance: none;
         width: 900px;
         height: 40px;
         border: none;
         border-radius: 20px;
         background-color: #212532;
         outline: none;
         color: white;
         padding-left: 67px;
         display: block;
         margin-right: auto;
         margin-left: auto;
    }
     .note-square {
         height: calc(30% - 100%);
         width: 20%;
         background-color: none;
         padding: 20px;
         margin: 10px;
         transition: 0.3s;
         border-radius: 5px;
         outline: #212532 4px solid;
         box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
         cursor:pointer;
    }
     .createbtn {
         position: fixed;
         top: 640px;
         right: 20px;
         background-color: #212532;
         height: 65px;
         width: 65px;
         font-size: 26px;
         cursor: pointer;
         color: white;
         border: none;
         border-radius: 8px;
         outline: none;
    }
     .note-square:hover {
         height: calc(30% - 100%);
         width: 20%;
         background-color: #212532;
         padding: 20px;
         margin: 10px;
         transition: 0.3s;
         border-radius: 5px;
         box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
         cursor:pointer;
    }
}
 #createit {
     padding-top: 14px;
     padding-left: 14px;
}
 @media only screen and (max-width: 767px) {
    /* mob */
     .note-square {
         height: calc(30% - 100%);
         width: 30%;
         background-color: none;
         padding: 20px;
         margin: 10px;
         margin-left: auto;
         margin-right: auto;
         border-radius: 5px;
         outline: #212532 4px solid;
         box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
         cursor:pointer;
    }
     .createbtn {
         position: fixed;
         top: 360px;
         right: 20px;
         background-color: #212532;
         height: 55px;
         width: 55px;
         font-size: 26px;
         cursor: pointer;
         color: white;
         border: none;
         border-radius: 8px;
         outline: none;
    }
     .note-square:hover {
         height: calc(30% - 100%);
         width: 30%;
         background-color: #212532;
         padding: 20px;
         margin: 10px;
         margin-left: auto;
         margin-right: auto;
         transition: 0.3s;
         border-radius: 5px;
         box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
         cursor:pointer;
    }
     .sein {
         -webkit-appearance: none;
         -moz-appearance: none;
         -ms-appearance: none;
         -o-appearance: none;
         appearance: none;
         width: 270px;
         height: 40px;
         margin-top: -16px;
         border: none;
         border-radius: 20px;
         background-color: #212532;
         outline: none;
         color: white;
         padding-left: 58px;
         display: block;
         margin-right: auto;
         margin-left: auto;
    }
     .avatar {
         width: 30px;
         height: 30px;
         border-radius: 50%;
         margin-left: 37px;
         position: relative;
         top: 24px;
    }
   #notes-container {
     margin-left: 0px
   }
}
 ::placeholder {
     color: #b3b3b3;
     opacity: 1;
}
 :-ms-input-placeholder, ::-ms-input-placeholder {
     color: #b3b3b3;
}

  /*
  Style for: highlighting codes
  Thanks to the maker: Michaël Ball (http://github.com/michael-ball/)
  Edits: Me
  Todo: []
  */

  @media only screen and (max-width: 767px) {
    pre {
      margin: auto 5em;
    }

    .langsel {
      margin: auto 5em;
    }
  }

  @media only screen and (min-width: 768px) {
    pre {
      margin: auto 26em;
    }
    
    .langsel {
      margin: auto 25.6em;
    }
  }
  .langsel {
    background: #050608;
    color: #c1c3c4;
    display: block;
    padding: 1em;
    outline: none;
    border: none;
    border-radius: 7px;
  }
  
  pre {
    margin-top: 2px;
    margin-bottom: 4px;
    outline: none;
    padding: 1em;
    overflow-x: auto;
    border: none;
    border-radius: 7px;
    background: #050608;
}

code.hljs {
    padding: 3px 5px;
    color: #c1c3c4;
}

code.hljs::selection, pre::selection {
    background-color: #28292a;
    color: #c1c3c4;
}

.hljs-comment {
    color: #474849;
}

.hljs-tag {
    color: #a3a5a6;
}

.hljs-operator, .hljs-punctuation, .hljs-subst {
    color: #c1c3c4;
}

.hljs-operator {
    opacity: .7;
}

.hljs-bullet, .hljs-deletion, .hljs-name, .hljs-selector-tag, .hljs-template-variable, .hljs-variable {
    color: #b53b50;
}

.hljs-attr, .hljs-link, .hljs-literal, .hljs-number, .hljs-symbol, .hljs-variable.constant_ {
    color: #ea770d;
}

.hljs-class .hljs-title, .hljs-title, .hljs-title.class_ {
    color: #c9d364;
}

.hljs-strong {
    font-weight: 700;
    color: #c9d364;
}

.hljs-addition, .hljs-code, .hljs-string, .hljs-title.class_.inherited__ {
    color: #06ea61;
}

.hljs-built_in, .hljs-doctag, .hljs-keyword.hljs-atrule, .hljs-quote, .hljs-regexp {
    color: #42fff9;
}

.hljs-attribute, .hljs-function .hljs-title, .hljs-section, .hljs-title.function_, .ruby .hljs-property {
    color: #03aeff;
}

.diff .hljs-meta, .hljs-keyword, .hljs-template-tag, .hljs-type {
    color: #ea5ce2;
}

.hljs-emphasis {
    color: #ea5ce2;
    font-style: italic;
}

.hljs-meta, .hljs-meta .hljs-keyword, .hljs-meta .hljs-string {
    color: #cd6320;
}

.hljs-meta .hljs-keyword, .hljs-meta-keyword {
    font-weight: 700;
}

  /*
  Style for: Note App
  Thanks to the maker: Me
  Edits: Me
  Todo: []
  */

#createit i {
     font-size: 20px;
     margin-left: 20px;
    }

    .addBtn {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 14px;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  width: 200px;
}

      .pra {
        font-size: 18px;
  width: 100%;
  font-family: Arial, sans-serif;
  background: none;
  outline: none;
  border: none;
  padding: none;
  margin: none;
  color: white;
  margin: 0 auto;
  display: block;
  width: 50%;
      }

      .todo {
        font-size: 18px;
  width: 100%;
  font-family: Arial, sans-serif;
  background: none;
  outline: none;
  border: none;
  padding: none;
  margin: none;
  color: white;
  margin: 0 auto;
  display: block;
  width: 50%;
      }  

    input {
      border: none;
  outline: none;
  background: transparent;
  color: white;
    }
      
      .header {
        font-size: 40px;
  width: 100%;
  background: none;
  outline: none;
  border: none;
  margin: 0 auto;
  display: block;
  width: 50%;
  margin-bottom: 7px;
  margin-top: 10px;
  }
      </style>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
  </head>
  <body>
    <div id="createit"><i class="fas fa-arrow-left"></i></div>
    <% values.forEach((v) => { %>
    <% if(v.startsWith("!")) { %>
     <h1 contenteditable="true" class="header"><%= v.replace("!", "") %></h1>
    <% } else if(v.startsWith("#")) { %>
      <img style="width: 80%; margin: 12px auto; display: block;" src="<%= v.replace('#', '') %>" alt="Note Image">
    <% } else if(v.startsWith("tc!")) { %>
      <div>
  <label style="display: flex; align-items: center;" class="todo">
    <% if(v.split("tc!")[1].split("t!")[0] === "true") { %>
      <input type="checkbox" checked>
    <% } else { %>
      <input type="checkbox">
    <% } %>
    <input type="text" value='<%= v.split("tc!")[1].split("t!")[1] %>' class="todo_1"></input>
  </label>
</div>
    <% } else if(v.includes("<pre")) { %>
     <%- v %>
    <% } else { %>
      <p contenteditable="true" class="pra"><%= v %></p>
    <% } %>
    <% }) %>
    <script>
    
    function changed() {
let inputs = document.getElementsByTagName("h1");
let textareas = document.getElementsByTagName("p");
let imgs = document.getElementsByTagName("img");
let inp = document.getElementsByTagName("label");
      let emjs = document.getElementsByTagName("input");
let pres = document.getElementsByTagName("pre");
let elements = [...inputs, ...textareas, ...imgs, ...inp, ...pres, ...emjs];
elements.sort((a, b) => {
  return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
});
let values = elements.map(el => {
  if(el.tagName === "H1") return `!${el.textContent}`;
  else if(el.tagName === "INPUT") return `!${el.value}`;
  else if(el.tagName === "IMG") return `#${el.src}`;
  else if(el.tagName === "P") return el.textContent;
    else if(el.tagName === "PRE") return el.outerHTML;
  else if (el.tagName === "LABEL") {
  const checkbox = el.querySelector("input[type='checkbox']");
  if (!checkbox) return;
  const checked = checkbox.checked;
  const textInput = el.querySelector("input[type='text']");
  if (!textInput) return;
  
  const value = textInput.value;
  return `tc!${checked}t!${value}`;
} 
})
  const parts = window.location.href.split("/");
const author = parts[parts.length - 2];
const id = parts[parts.length - 1];
      console.log(values)
  fetch('/changes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({id, author ,values, authorid: "<%= authorid %>"})
  })
    .then(res => res.json())
    .then(res => {
      if(res.ok) window.location.href = "/";
    })
    .catch(error => console.error(error));
}
  document.getElementById("createit").addEventListener("click", changed);
      
document.addEventListener("contextmenu", function(event) {
  event.preventDefault();

  // Create the context menu
  var contextMenu = document.createElement("div");
  contextMenu.style.display = "none";
  contextMenu.style.position = "fixed";
  contextMenu.style.backgroundColor = "black";
  contextMenu.style.zIndex = "100";

  // Add menu items to the context menu
  var menuItem1 = document.createElement("div");
  menuItem1.innerHTML = "New header";
  menuItem1.style.padding = "10px";
  contextMenu.appendChild(menuItem1);

  var menuItem2 = document.createElement("div");
  menuItem2.innerHTML = "New paragraph";
  menuItem2.style.padding = "10px";
  contextMenu.appendChild(menuItem2);

  var menuItem3 = document.createElement("div");
  menuItem3.innerHTML = "New image";
  menuItem3.style.padding = "10px";
  contextMenu.appendChild(menuItem3);

  var menuItem4 = document.createElement("div");
  menuItem4.innerHTML = "To-do list";
  menuItem4.style.padding = "10px";
  contextMenu.appendChild(menuItem4);

  var menuItem5 = document.createElement("div");
  menuItem5.innerHTML = "Code";
  menuItem5.style.padding = "10px";
  contextMenu.appendChild(menuItem5);
  
  // Show the context menu on right click
  document.addEventListener("contextmenu", function(e) {
    contextMenu.style.left = e.clientX + "px";
    contextMenu.style.top = e.clientY + "px";
    contextMenu.style.display = "block";
    e.preventDefault();
  });

  // Hide the context menu on click outside
  document.addEventListener("click", function(e) {
    contextMenu.style.display = "none";
  });

  // Add the context menu to the body
  document.body.appendChild(contextMenu);
  menuItem1.addEventListener("click", function() {
  let wrapDiv = document.createElement("div");
  wrapDiv.id = "titlewrap";
  wrapDiv.draggable = "true";
  let ino = document.createElement("h1");
  ino.innerHTML = "Header";
  ino.setAttribute("contentEditable", "true")
  ino.classList.add("header")
  wrapDiv.appendChild(ino)
  document.body.appendChild(wrapDiv)
  });

  menuItem2.addEventListener("click", function() {
  let wrapDiv = document.createElement("div");
  wrapDiv.id = "deswrap";
  wrapDiv.draggable = "true";
  let ies = document.createElement("p");
  ies.innerHTML = "Paragraph";
  ies.setAttribute("contentEditable", "true");
  ies.classList.add("pra");
  wrapDiv.appendChild(ies)
  document.body.appendChild(wrapDiv)
  });

  menuItem3.addEventListener("click", function() {
let fileInput = document.createElement("input");
fileInput.type = "file";

fileInput.addEventListener("change", function() {
let file = fileInput.files[0];
let reader = new FileReader();
reader.onload = function(e) {
let img = document.createElement("img");
img.src = e.target.result;
img.style.width = "80%";
    img.style.display = "block";
    img.style.margin = "0 auto";
  img.style["margin-top"] = "12px";
  img.style["margin-bottom"] = "12px";
document.body.appendChild(img);
}
reader.readAsDataURL(file);
});
    fileInput.click();
  });  
  
menuItem4.addEventListener("click", function() {
const container = document.createElement("div");
document.body.appendChild(container);

const label = document.createElement("label");
label.style.display = "flex";
label.style.alignItems = "center";
label.classList.add("todo");
label.innerHTML = `<input type="checkbox"><input type="text" class="todo_1" placeholder="Type your next mission"></input>`;
container.appendChild(label);

document.addEventListener("click", (ev) => {
  if (ev.target !== container && !container.contains(ev.target)) {
    document.removeEventListener("keyup", handleEnter);
  } else {
    document.addEventListener("keyup", handleEnter);
  }
});

function handleEnter(e) {
  if (e.key === "Enter") {
    const newLabel = document.createElement("label");
    newLabel.style.display = "flex";
    newLabel.style.alignItems = "center";
    newLabel.classList.add("todo");
    newLabel.innerHTML = `<input type="checkbox"><input class="todo_1" type="text" placeholder="Type your next mission"></input>`;
    container.appendChild(newLabel);
newLabel.querySelector(".todo_1").focus();
  }
}
})
            menuItem5.addEventListener("click", function() {
        let pre = document.createElement("pre");
        let code = document.createElement("code");
        let langs = document.createElement("select");
        langs.classList.add("langsel");
        langs.style.display = "none";
        langs.innerHTML = `
  <option value="txt">Plain text</option>
  <option value="javascript">JavaScript</option>
  <option value="html">HTML</option>
  <option value="python">Python</option>
  <option value="css">CSS</option>
  <option value="xml">XML</option>
  <option value="java">Java</option>
  <option value="csharp">C#</option>
  <option value="c">C</option>
  <option value="cpp">C++</option>
  <option value="json">JSON</option>
  <option value="vbnet">VB.NET</option>
  <option value="typescript">TypeScript</option>
  <option value="bash">Bash / Shell</option>
  <option value="php">PHP</option>`

        pre.setAttribute("contentEditable", "true");
        pre.className = "hljs language-txt";
        code.innerText = "Hello world!, write the code here and choose the language, oh.. also to copy just double click this code block";
        pre.appendChild(code);
        document.body.appendChild(langs);
        document.body.appendChild(pre);
        hljs.highlightElement(pre);
        langs.addEventListener("change", function(evt) {
            pre.className = "hljs language-" + evt.target.value;
            hljs.highlightElement(pre);
        });
        pre.addEventListener("click", () => {
            langs.style.display = "block";
        })
        pre.addEventListener("dblclick", () => {
            langs.style.display = "block";

            navigator.clipboard.writeText(pre.innerText)
        })
        document.addEventListener("click", (op) => {
            if (op.target !== pre && op.target !== langs) langs.style.display = "none";
            else langs.style.display = "blcok";
        })
        document.addEventListener("input", (po) => {
            if (po.target !== pre && po.target !== langs) langs.style.display = "none";
            else langs.style.display = "blcok";
        })
        pre.addEventListener("input", () => {
            hljs.highlightElement(pre);
            langs.style.display = "block";
            pre.focus();
            let range = document.createRange();
            range.selectNodeContents(pre);
            range.collapse(false);
            let sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        })
        document.addEventListener("keyup", function(evo) {
            if (evo.keyCode === 13 && evo.target === pre) {
                evo.preventDefault();
                document.execCommand("insertHTML", false, "\n");
            }
        }); 
     });
});
    
document.addEventListener("dblclick", function(event) {
  
    // Create the context menu
  var contextMenu = document.createElement("div");
  contextMenu.style.display = "none";
  contextMenu.style.position = "fixed";
  contextMenu.style.backgroundColor = "black";
  contextMenu.style.zIndex = "100";

  // Add menu items to the context menu
  var menuItem1 = document.createElement("div");
  menuItem1.innerHTML = "Increase text size";
  menuItem1.style.padding = "10px";
  contextMenu.appendChild(menuItem1);

   var menuItem5 = document.createElement("div");
    menuItem5.innerHTML = "Add icon";
    menuItem5.style.padding = "10px";
    contextMenu.appendChild(menuItem5);

  var menuItem4 = document.createElement("div");
  menuItem4.innerHTML = "Decrease text size";
  menuItem4.style.padding = "10px";
  contextMenu.appendChild(menuItem4);
    
  var menuItem2 = document.createElement("div");
  menuItem2.innerHTML = "Delete";
  menuItem2.style.padding = "10px";
  contextMenu.appendChild(menuItem2);

  var menuItem3 = document.createElement("div");
  menuItem3.innerHTML = "Change color";
  menuItem3.style.padding = "10px";
  contextMenu.appendChild(menuItem3);

   contextMenu.style.left = event.clientX + "px";
   contextMenu.style.top = event.clientY + "px";
   contextMenu.style.display = "block";
  
document.addEventListener("click", function(e) {
    contextMenu.style.display = "none";
  });
  
  menuItem1.addEventListener("click", function() {
    let fontsize = parseInt(window.getComputedStyle(event.target, null).getPropertyValue("font-size"));
    event.target.style.fontSize = (fontsize + 2) + "px";
  })

  menuItem4.addEventListener("click", function() {
    let fontsize = parseInt(window.getComputedStyle(event.target, null).getPropertyValue("font-size"));
    event.target.style.fontSize = (fontsize - 2) + "px";
  })

menuItem3.addEventListener("click", function() {
    let inp = document.createElement("input");
    inp.type = "color";
    inp.style.position = "absolute";
    inp.style.left = event.clientX + "px";
    inp.style.top = event.clientY + "px";
    document.body.appendChild(inp);

    inp.addEventListener("change", function() {
      event.target.style.color = inp.value;
      document.body.removeChild(inp);
    });
});
  
menuItem2.addEventListener("click", function() {
if (!event.target.parentElement.classList.contains("todo")) {
  event.target.parentNode.removeChild(event.target);
} else {
  event.target.parentElement.remove();
}
});

menuItem5.addEventListener("click", function() {
        // Get the element to add the emoji to
        const element = event.target;

        // Set the position of the parent element to relative
        element.style.position = "relative";
        const emoji = document.createElement("input");
        emoji.type = "text";
        emoji.className = "header";
        emoji.id = "emoj";
        emoji.placeholder = "Emoji here";
        emoji.style["padding-right"] = "15px"
        emoji.style.fontSize = Number(element.style.fontSize.replace("px", "")) - 5 + "px";
        event.target.parentElement.insertBefore(emoji, element);
        emoji.addEventListener("input", () => {
            if (!emoji.value.match(/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gm)) {
                emoji.value = "";
            }
        })
    })
      
document.body.appendChild(contextMenu);
});
    </script>
  </body>
</html>
