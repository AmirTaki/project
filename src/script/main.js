let iconMenu = document.querySelector('.iconMenu')
let menuContainer = document.querySelector(".menuContainer")
let crossSideBar = document.querySelector(".crossSideBar")
let listTitle = document.querySelectorAll('.listTitle')
let pageContainer = document.querySelectorAll('.pageContainer')
let backCountaienr = document.querySelectorAll(".backCountaienr")
let crossContainerSidebar = document.querySelectorAll('.crossContainer-sidebar')
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
//
for(let i = 0; i < crossContainerSidebar.length; i++){
    crossContainerSidebar[i].addEventListener("click", (e)=>{
        pageContainer[i].style.animation = "moveReversePageContainer .2s linear forwards"  
        setTimeout(() => {
            pageContainer[i].style.display = 'none'
        },200);
        menuContainer.style.animation = "moveReverseSidebar .5s linear forwards"
    })
}

// WINDOW ADD EVENET RESIZE 
window.addEventListener('resize', (e)=>{
    if(window.innerWidth < 750){
        menuContainer.style.display = "none"
        closePageContainerSidebar()//
    }
    else {
        menuContainer.style.display = "flex"
        pageContainer[0].style.display = "block"//

    }
})
