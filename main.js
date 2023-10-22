const title = document.getElementById("title")
const button = document.getElementById("add-button")

button.addEventListener("click", function(event){
    if(title.value == ""){
        event.preventDefault();
    }
    else{
       var newdiv = document.createElement("div")
       newdiv.classList.add("todo-list")
       var parentdiv = document.getElementsByClassName("todo")[0]
       parentdiv.appendChild(newdiv)
       var newdiv2 = document.createElement("div")
       newdiv2.classList.add("todo-div")
       newdiv.appendChild(newdiv2)
       var h2title = document.createElement("h2")
       h2title.textContent = title.value
       newdiv2.appendChild(h2title)

       var newdiv3 = document.createElement("div")
       newdiv3.id = "button"
       newdiv.appendChild(newdiv3)
       var newdiv4 = document.createElement("div")
       newdiv4.classList.add("button")
       newdiv3.appendChild(newdiv4)
       
       var newbutton = document.createElement("button")
       newbutton.textContent= "Completed"
       newbutton.id = "complete"
       newdiv4.appendChild(newbutton)
       var newbutton1 = document.createElement("button")
       newbutton1.textContent= "Update"
       newbutton1.id = "update"
       newdiv4.appendChild(newbutton1)
       var newbutton2 = document.createElement("button")
       newbutton2.textContent= "Delete"
       newbutton2.id = "delete"
       newdiv4.appendChild(newbutton2)

       var newhr = document.createElement("hr")
       parentdiv.appendChild(newhr)
    }
})
