let iconMenu = document.querySelector('.iconMenu')
let menuContainer = document.querySelector(".menuContainer")
let crossSideBar = document.querySelector(".crossSideBar")
let listTitle = document.querySelectorAll('.listTitle')
let pageContainer = document.querySelectorAll('.pageContainer')
// MOVE ANIMATION SIDEBAR
iconMenu.addEventListener("click", (e)=>{
    menuContainer.style.display = "flex"
    menuContainer.style.animation = "moveSidebar .5s linear forwards"
})
// REVERSE MOVE ANIMATIO SIDEBAR
crossSideBar.addEventListener("click", (e)=>{
    menuContainer.style.animation = "moveReverseSidebar .5s linear forwards"
})
// MOVE ANIMATION CONATAINER PAGE SIDEBAR
for(let i = 0; i < listTitle.length; i++){
    listTitle[i].addEventListener("click", (e)=>{
        if(window.innerWidth < 750){
            pageContainer[i].style.display = 'flex'
            pageContainer[i].style.animation = "movePageContainer .5s linear forwards"
        }
    })
}
// WINDOW ADD EVENET RESIZE 
window.addEventListener('resize', (e)=>{
    if(window.innerWidth < 750){
        menuContainer.style.display = "none"
    }
    else {
        menuContainer.style.display = "flex"
    }
})
