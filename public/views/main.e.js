<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
  <title></title>
  <link rel="stylesheet" href="styles/main.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
<body onload="localStorage.setItem('username', '<%= username %>'); localStorage.setItem('uuid', '<%= uuid %>'); if (!localStorage.getItem('refreshed')) { localStorage.setItem('refreshed', true); location.reload(); }">
  <img class="avatar" id="avatar" src="<%=avatar %>">
    <input class="sein" placeholder="<%= username %>, Search aound your notes" type="text">
<br>
  <div id="noteWindow" data-theme="dark" style="display:none">
  <div id="createit"><i class="fas fa-arrow-left"></i></div>
    <br>
    <div id="titlewrap" draggable="true">
    <input type="text" id="titleofnote" placeholder="Title" autocomplete="off" required>
    </div>
    <br>
    <div id="deswrap" draggable="true">
  <textarea type="text" id="desofnote" class="desofnote" placeholder="What to write?" autocomplete="off" required wrap="hard"></textarea>  
    </div>
  </div>
  
  <div id="notes-container">
  <% notes.forEach((note) => { %>
    <div id="<%= note.id %>" class="note-square" onclick="oopen('<%= note.url %>')">
      <a href="<%= note.url %>" id="<%= note.id %>" class="note-title"><%= note.title %></a>
      <p id="<%= note.id %>" class="note-description"><%= note.content %></p>
    </div>
  <% }); %>
</div>
    <button onclick="newNote()" class="createbtn" id="crbtn">+</button>
  <script src="scripts/main.js"></script>
</body>
</html>
