let date = new Date();
let hour = date.getHours();
if (hour >= 22 || hour < 6) {
    // It's night time
    document.title = "Good night, " + getCookie("loggedin");
} else if (hour >= 6 && hour < 12) {
    // It's morning
    document.title = "Good morning, " + getCookie("loggedin");
} else if (hour >= 12 && hour < 18) {
    // It's afternoon
    document.title = "Good afternoon, " + getCookie("loggedin");
} else {
    // It's evening
    document.title = "Good evening, " + getCookie("loggedin");
}

document.getElementById("deswrap").ondragstart = function(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
};

document.getElementById("titlewrap").ondragstart = function(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
};

document.getElementById("noteWindow").ondrop = function(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData("text/plain");
    const element = document.getElementById(id || event.target.id);
    document.getElementById("noteWindow").appendChild(element);
};

document.getElementById("noteWindow").ondragover = function(event) {
    event.preventDefault();
};

function newNote() {
    window.scrollTo(0, 0);
    document.getElementById("crbtn").style.display = "none";
    document.getElementById("noteWindow").style.display = "block";
    document.getElementById("notes-container").style.display = "none";
    document.body.style["background-color"] = "#212532";
}

async function saveNote() {
    try {
        let noteWindow = document.getElementById("noteWindow");
        let inputsw = noteWindow.getElementsByTagName("input");
        let inputs = Array.from(inputsw).filter(input => input.id === "titleofnote");
        let textareas = noteWindow.getElementsByTagName("textarea");
        let lbls = noteWindow.getElementsByTagName("label");
        let imgs = noteWindow.getElementsByTagName("img");
      let pres = document.getElementsByTagName("pre");
        let elements = [...inputs, ...textareas, ...imgs, ...lbls, ...pres];
        elements.sort((a, b) => {
            return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
        });
        let values = elements.map(el => {
            if (el.tagName === "INPUT") return `!${el.value}`;
            else if (el.tagName === "IMG") return `#${el.src}`;
            else if(el.tagName === "PRE") return el.outerHTML;
            else if (el.tagName === "LABEL") {
                const checkbox = el.querySelector("input[type='checkbox']");
                if (!checkbox) return;
                console.log(checkbox)
                const checked = checkbox.checked;
                const textInput = el.querySelector("input[class='todo_1']");
                if (!textInput) return;

                const value = textInput.value;
                return `tc!${checked}t!${value}`;
            } else return el.value;
        })
        const res = await fetch('/newnote', {
            method: 'POST',
            body: JSON.stringify({
                title: document.getElementById("titleofnote").value,
                content: document.getElementById("desofnote").value,
                author: getCookie("l"),
                visible: "private",
                values: values,
                authorid: getCookie("dontgveit")
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(p => p.json()).then(res => {
            window.location.reload()
        });
    } catch (e) {
        console.log(e);
    }
}

function oopen(url) {
    window.location.href = url;
}

function getCookie(name) {
    if(name === "dontgveit") return localStorage.getItem('uuid');
    else return localStorage.getItem('username');
}
document.getElementById("createit").addEventListener("click", saveNote);

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
    var contextMenu = document.createElement("div");
    contextMenu.style.display = "none";
    contextMenu.style.position = "fixed";
    contextMenu.style.backgroundColor = "black";
    contextMenu.style.zIndex = "100";

var menuItemZ = document.createElement("div");
    menuItemZ.innerHTML = "Add topic";
    menuItemZ.style.padding = "10px";
    contextMenu.appendChild(menuItemZ);
      
var menuItem = document.createElement("div");
    menuItem.innerHTML = "Archive";
    menuItem.style.padding = "10px";
    contextMenu.appendChild(menuItem);
  
    var menuItem2 = document.createElement("div");
    menuItem2.innerHTML = "Delete";
    menuItem2.style.padding = "10px";
    contextMenu.appendChild(menuItem2);
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

    menuItem.addEventListener("click", async() => {
     let coh = confirm(`Are you sure you want to archive the note "${event.target.innerText.split("\n")[0]}"?, **that can't be undone!**`);
        if (coh !== true) return;
        try {
            const res = await fetch('/archive', {
                method: 'POST',
                body: JSON.stringify({
                    id: event.target.id,
                    author: getCookie("l")
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(p => p.json()).then(res => {
                event.target.style.display = 'none';
                location.reload();
            });
        } catch (e) {
            console.log(e);
                          }
    })
  
menuItemZ.addEventListener("click", async () => {
   let v = prompt("The name of the topic you have:");
   fetch('/addto', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    v,
    uz: getCookie("o"),
    id: event.target.id
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
})

  menuItem2.addEventListener("click", async () => {
        let coh = confirm(`Are you sure you want to delete the note "${event.target.innerText.split("\n")[0]}"?, **that can't be undone!**`);
        if (coh !== true) return;
        try {
            const res = await fetch('/del', {
                method: 'POST',
                body: JSON.stringify({
                    id: event.target.id,
                    author: getCookie("l")
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(p => p.json()).then(res => {
                event.target.style.display = 'none';
                location.reload();
            });
        } catch (e) {
            console.log(e);
        }
  });
});

let notewnd = document.getElementById("noteWindow");

notewnd.addEventListener("contextmenu", function(event) {
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
        let ino = document.createElement("input");
        ino.type = "text";
        ino.placeholder = "Header";
        ino.id = "titleofnote";
        wrapDiv.appendChild(ino)
        notewnd.appendChild(wrapDiv)
    });

    menuItem2.addEventListener("click", function() {
        let wrapDiv = document.createElement("div");
        wrapDiv.id = "deswrap";
        wrapDiv.draggable = "true";
        let ies = document.createElement("textarea");
        ies.type = "text";
        ies.placeholder = "paragraph";
        ies.id = "desofnote";
        ies.autocomplete = "off";
        ies.wrap = "hard";
        wrapDiv.appendChild(ies)
        notewnd.appendChild(wrapDiv)
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
                notewnd.appendChild(img);
            }
            reader.readAsDataURL(file);
        });
        fileInput.click();
    });

    menuItem4.addEventListener("click", function() {
        console.log("P{PP{")
        const container = document.createElement("div");
        notewnd.appendChild(container);

        const label = document.createElement("label");
        label.style.display = "flex";
        label.style.alignItems = "center";
        label.classList.add("todo");
        label.innerHTML = `<input type="checkbox"><input type="text" class="todo_1" placeholder="Type your next mission"></input>`;
        container.appendChild(label);

        notewnd.addEventListener("click", (ev) => {
            if (ev.target !== container && !container.contains(ev.target)) {
                notewnd.removeEventListener("keyup", handleEnter);
            } else {
                notewnd.addEventListener("keyup", handleEnter);
            }
        });

        function handleEnter(e) {
            if (e.key === "Enter") {
                const newLabel = document.createElement("label");
                newLabel.style.display = "flex";
                newLabel.style.alignItems = "center";
                newLabel.classList.add("todo");
                newLabel.innerHTML = `<input class="todo_chk" type="checkbox"><input class="todo_1" type="text" placeholder="Type your next mission"></input>`;
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
        document.getElementById("noteWindow").appendChild(langs);
        document.getElementById("noteWindow").appendChild(pre);
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
})


notewnd.addEventListener("dblclick", function(event) {
    if (event.target.classList.contains("langsel") || event.target.tagName === "pre" || event.target.tagName === "span") return;
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

    var menuItem4 = document.createElement("div");
    menuItem4.innerHTML = "Decrease text size";
    menuItem4.style.padding = "10px";
    contextMenu.appendChild(menuItem4);

    var menuItem5 = document.createElement("div");
    menuItem5.innerHTML = "Add icon";
    menuItem5.style.padding = "10px";
    contextMenu.appendChild(menuItem5);

    var menuItem3 = document.createElement("div");
    menuItem3.innerHTML = "Change color";
    menuItem3.style.padding = "10px";
    contextMenu.appendChild(menuItem3);

    contextMenu.style.left = event.clientX + "px";
    contextMenu.style.top = event.clientY + "px";
    contextMenu.style.display = "block";

    var menuItem2 = document.createElement("div");
    menuItem2.innerHTML = "Delete";
    menuItem2.style.padding = "10px";
    contextMenu.appendChild(menuItem2);

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
        emoji.id = "titleofnote";
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

document.getElementById("avatar").addEventListener("click", (e) => {
  window.location.href = "/@" + getCookie("o");
})