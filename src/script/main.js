const searchIconInput = document.querySelector(".searchIcon input")
const iconSearch = document.querySelector(".searchIcon .bi-search")
const iconSidebar = document.querySelector(".iconSidebar i")
const containterHeader = document.querySelector('.containterHeader')
const deleteContainer = document.querySelector(".deleteContainer i")
const itemHeader = document.querySelectorAll('.itemHeader')
const containerSidertoSider = document.querySelectorAll('.containerSidertoSider')

searchIconInput.addEventListener("focus", (e)=> {
    iconSearch.style.opacity = 0
})

searchIconInput.addEventListener("focusout", (e)=> {
    iconSearch.style.opacity = 1
})

const HideFlexInputSearchHeader = () =>{
    searchIconInput.style.animation  = "searchInputReverse .5s linear forwards "
    setTimeout(() => {
        searchIconInput.style.opacity = 0
    }, 500);
}

iconSearch.addEventListener('click', (e)=>{
    if(searchIconInput.style.opacity == 0){
        searchIconInput.style.opacity = 1
        searchIconInput.style.animation  = "searchInput .5s linear forwards " 
    } 
    else {
        HideFlexInputSearchHeader ();
    }
})

const resizeItem = () => {
    containterHeader.style.display  =  window.innerWidth < 750 ?  "none" : 'flex'
}

iconSidebar.addEventListener("click", (e)=>{
    containterHeader.style.animation  = "sidebarMove .3s linear forwards"
    containterHeader.style.display  = "inline"
})

deleteContainer.addEventListener('click', (e)=>{
    containterHeader.style.animation  = "sidebarMoveReverse .3s linear forwards"
})

for(let i = 0; i <  itemHeader.length; i++){
    itemHeader[i].addEventListener("mouseover", (e)=>{
        containerSidertoSider[i].style.animation = "upperhightSider .3s linear forwards"
    })
}
for(let i = 0; i <  itemHeader.length; i++){
    itemHeader[i].addEventListener("mouseleave", (e)=>{
        containerSidertoSider[i].style.animation = "downerhightSider .3s linear forwards"
    })
}

window.addEventListener("resize", (e)=>{
    HideFlexInputSearchHeader()
    resizeItem()
})

