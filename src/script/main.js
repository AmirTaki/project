let iconMenu = document.querySelector('.iconMenu')
let menuContainer = document.querySelector(".menuContainer")
let crossSideBar = document.querySelector(".crossSideBar")
// MOVE ANIMATION SIDEBAR
iconMenu.addEventListener("click", (e)=>{
    menuContainer.style.display = "flex"
    menuContainer.style.animation = "moveSidebar .5s linear forwards"
})
// REVERSE MOVE ANIMATIO SIDEBAR
crossSideBar.addEventListener("click", (e)=>{
    menuContainer.style.animation = "moveReverseSidebar .5s linear forwards"
})