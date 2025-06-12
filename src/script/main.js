const searchIconInput = document.querySelector(".searchIcon input")
const iconSearch = document.querySelector(".searchIcon .bi-search")
const iconSidebar = document.querySelector(".iconSidebar i")
const containterHeader = document.querySelector('.containterHeader')

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

iconSidebar.addEventListener("click", (e)=>{
    containterHeader.style.animation  = "sidebarMove 2s linear forwards"
})

window.addEventListener("resize", (e)=>{
    HideFlexInputSearchHeader()
})

