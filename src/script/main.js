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
// WINDOW ADD EVENET RESIZE 
window.addEventListener('resize', (e)=>{
    if(window.innerWidth < 750){
        menuContainer.style.display = "none"
    }
    else {
        menuContainer.style.display = "flex"
    }
})
