const title = document.getElementById("title")
const button = document.getElementById("add-button")
var parentdiv = document.getElementsByClassName("todo")[0]



button.addEventListener("click", function(event){
    if(title.value == ""){
        event.preventDefault();
    }
    else{
       var newhr = document.createElement("hr")
       parentdiv.appendChild(newhr)
       var newdiv = document.createElement("div")
       newdiv.classList.add("todo-list")
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
       newbutton.textContent= "Incomplete"
       newbutton.style.backgroundColor = "gray"
       newbutton.id = "complete"
       newdiv4.appendChild(newbutton)
       var newbutton1 = document.createElement("button")
       newbutton1.textContent= "Update"
       newbutton1.id = "update"
       newdiv4.appendChild(newbutton1)
       var newbutton2 = document.createElement("button")
       newbutton2.id = "delete"
       
       newbutton2.textContent= "Delete"
       
       newdiv4.appendChild(newbutton2)

       
    }

    newbutton2.addEventListener("click", function(){
    parentdiv.removeChild(newdiv)
    newhr.remove()
})
    newbutton1.addEventListener("click", function(){
        newbutton.textContent = "Complete";
        newbutton.style.backgroundColor = "rgb(39, 156, 68)";
    })
})



