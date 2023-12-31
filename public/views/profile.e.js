<html>
  <head>
    <meta charset="UTF-8">
  <meta name="viewport" content="height=device-height, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <style>
      .foll {
        background-color: #731DD8;
        color: white;
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
        margin-left: auto;
      }

        .container {
    max-width: 90%;
    margin: 50px auto;
    padding: 40px;
    border-radius: 20px;
  }

  body {
    background: linear-gradient(to bottom, #212532, #0a0b0f);
    font-family: Arial, sans-serif;
    color: white;
  }
  
  .user {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    margin-left: 50px;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
  }
  
  h2 {
    font-size: 30px;
  }
  
  p {
    font-size: 14px;
    font-weight: bold;
    margin-top: -24px;
    color: #bfbfbf;
  }
  
  .tabs {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
    justify-content: center;
  }

  .tab {
    font-size: 18px;
    padding: 20px;
    color: #bfbfbf;
    cursor: pointer;
    border-bottom: 2px solid transparent;
  }

  .tab:hover, .active {
    border-bottom: 2px solid white;
    color: white;
    transition: 0.5s;
  }
  
  .notes {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .note {
    width: calc(33.33% - 20px);
    height: 200px;
    background: #EF233C;
    margin: 10px;
    border-radius: 20px;
    padding: 20px;
    color: white;
  }
  
  .note h3 {
    font-size: 20px;
    margin-top: 0;
  }
  
  .note p {
    font-size: 14px;
    margin-top: -12px;
  }

@media screen and (max-width: 768px) {
  .user {
    margin-left: 20px;
  }
  
  .tab {
    font-size: 16px;
  }
  
  .note {
    width: calc(50% - 20px);
  }
}

@media screen and (max-width: 576px) {
.container {
max-width: 95%;
padding: 20px;
}

.user {
margin-left: 5px;
}

.avatar {
width: 80px;
height: 80px;
margin-left: 10px;
}

h2 {
font-size: 24px;
margin-top: 10px;
}

p {
margin-top: -15px;
}
      
.tabs {
flex-wrap: wrap;
}

.tab {
font-size: 14px;
padding: 10px;
}

.note {
width: calc(50% - 20px);
height: 150px;
}

.note h3 {
font-size: 16px;
}

.note p {
font-size: 12px;
}

.display-block {
  display: flex;
}
      }

      .igu {
    text-align: center;
        color: white;
      }
    </style>
    <meta property="og:title" content="<%= username %> on oceans">
<meta property="og:description" content="No bio.">
<meta property="og:type" content="website">
<meta property="og:image" content="<%= avatar %>">
<meta name="theme-color" content="#00a8e6">
  </head>
  <body>
    <div class="container">
      <div class="user">
        <img src="<%= avatar %>" class="avatar">
        <div>
          <h2><%= username %></h2>
          <p contenteditable="true"><%= bio %></p>
  </div>
      </div>
      <div class="tabs">
        <div class="tab active" id="del">Deleted</div>
        <div class="tab" id="arch">Archived</div>
        <% if(topics.length >= 1) { %>
        <% topics.forEach(top => { %>
          <div class="tab" id="<%= top.id %>"><%= top.name %></div>
          <% }) %>
          <% } %>
            <div class="tab" id="create" onclick='pro()'>+</div>
      </div>
      <div class="notes" id="dnotes">
        <% if (del.length >= 1) { %>
        <% del.forEach(dc => { %>
        <div class="note">
          <h3><%= dc.title %></h3>
         <p><%= dc.content %></p>
        </div>
          <% }) %>
          <% } else { %>
            <p class="igu">No notes found.</p>
          <% } %>
      </div>
      <div style="display: none;" class="notes" id="anotes">
        <% if (arch.length > 0) { %>
        <% arch.forEach(dc => { %>
        <div class="note">
          <h3><%= dc.title %></h3>
         <p><%= dc.content %></p>
        </div>
          <% }) %>
          <% } else { %>
            <p class="igu">No notes found.</p>
          <% } %>
      </div>
      <% topics.forEach(to => { %>
  <div class="notes" style="display: none;" id="<%= to.ide %>">
    <% if (notes.filter(n => n.topic === to.name).length >= 1) { %>
    <% notes.filter(n => n.topic === to.name).forEach(dc => { %>
      <div class="note">
        <h3><%= dc.title %></h3>
        <p><%= dc.content %></p>
      </div>
    <% }) %>
    <% } else { %>
      <p class="igu">No notes found.</p>
    <% } %>
  </div>
<% }); %>
      </div>
    </div>
    <script>
      let cs = document.querySelectorAll(".tab");
      for (let c of cs) 
      c.addEventListener("click", (e) => {
        cs.forEach((element) => {
  element.classList.remove('active');
       });
        e.target.classList.add("active");
      })
    document.getElementById("del").addEventListener("click", (e) => {
document.getElementById("anotes").style.display = "none";
document.getElementById("dnotes").style.display = "flex";
   let topics = <%- JSON.stringify(topics) %>;
   topics.forEach(o => {
     document.getElementById(o.ide).style.display = "none";
   })
    })

document.getElementById("arch").addEventListener("click", (e) => {
  document.getElementById("dnotes").style.display = "none";
document.getElementById("anotes").style.display = "flex";
  let topics = <%- JSON.stringify(topics) %>;
   topics.forEach(o => {
     document.getElementById(o.ide).style.display = "none";
   })
      })
    <% if(topics.length >= 1) { %>
      <% for (let no of topics) { %>
document.getElementById("<%= no.id %>").addEventListener("click", (e) => { %>
  document.getElementById("dnotes").style.display = "none";  document.getElementById("anotes").style.display = "none";
  let topics = <%- JSON.stringify(topics) %>;
  let filteredTopics = topics.filter(s => s.id !== "<%= no.id %>");
filteredTopics.forEach(d => document.getElementById(d["ide"]).style.display = "none");

  document.getElementById("<%= no.ide %>").style.display = "flex";
    })
    <% } %>
  <% } %>

   function pro() {
     let va = prompt("Type the name of the topic");
     fetch('/newto', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    va,
    uz: "<%= username %>"
  })
})
  .then(response => response.json())
  .then(data => {
    window.locatin.reload();
  })
  .catch(error => console.error(error));
   }
    </script>
  </body>
</html>
