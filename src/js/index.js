 let hamburgerTop = document.querySelector(".burger_top")  
 let menuTop = document.querySelector(".menu_top")

 hamburgerTop.onclick = function () {
   menuTop.classList.toggle ("active-burger")
   hamburgerTop.classList.toggle ("hamburger-open")
 }

