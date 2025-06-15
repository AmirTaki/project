let iconMenu = document.querySelector('.iconMenu')
let menuContainer = document.querySelector(".menuContainer")
let crossSideBar = document.querySelector(".crossSideBar")
let listTitle = document.querySelectorAll('.listTitle')
let pageContainer = document.querySelectorAll('.pageContainer')
let backCountaienr = document.querySelectorAll(".backCountaienr")
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
// MOVE REVERSE ANIMATION CONATAINER PAGE SIDEBAR
for(let i = 0; i < backCountaienr.length; i++){
    backCountaienr[i].addEventListener("click", (e)=>{
        pageContainer[i].style.animation = "moveReversePageContainer .5s linear forwards"  
        setTimeout(() => {
            pageContainer[i].style.display = 'none'
        }, 500);
    })
}
// FUNCTION DISPLAY NONE PAGECONTAINER
const closePageContainerSidebar = () => {
    for(let i = 0; i < pageContainer.length; i++){
    pageContainer[i].style.display = "none"
    }
}

// WINDOW ADD EVENET RESIZE 
window.addEventListener('resize', (e)=>{
    closePageContainerSidebar()
    if(window.innerWidth < 750){
        menuContainer.style.display = "none"
    }
    else {
        menuContainer.style.display = "flex"
    }
})
