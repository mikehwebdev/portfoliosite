
let burgerButton = document.getElementById("burger-button")
let burgerMenu = document.getElementById("burgerMenu")
let closeIcon = document.getElementById("closeIcon")
let menuIcon = document.getElementById("menuIcon")

burgerButton.addEventListener("click", burgerToggle) 

function burgerToggle () {
    if (!burgerMenu.classList.contains("visible")) { 
            burgerMenu.classList.add("visible")
            closeIcon.classList.add("visible")
            menuIcon.classList.remove("visible")
      } else {
            burgerMenu.classList.remove("visible")
            closeIcon.classList.remove("visible")
            menuIcon.classList.add("visible")
   }

}   
