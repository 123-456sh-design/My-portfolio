let sideMenu = document.querySelector(".side-menu")
let menu = document.querySelector(".menu")
let exit = document.querySelector(".exit")

menu.addEventListener("click",function(){
    sideMenu.style.right = "0"
    exit.style.right = "20px"
})

exit.addEventListener("click",function(){
    exit.style.right = "-400px"
    sideMenu.style.right = "-400px"
})