const searchIconInput = document.querySelector(".searchIcon input")
const iconSearch = document.querySelector(".searchIcon .bi-search")


searchIconInput.addEventListener("focus", (e)=> {
    iconSearch.style.opacity = 0
})

searchIconInput.addEventListener("focusout", (e)=> {
    iconSearch.style.opacity = 1
})

iconSearch.addEventListener('click', (e)=>{
    if (window.innerWidth < 750){
        searchIconInput.style.display = searchIconInput.style.display === "flex" ? "none" : "flex";
    }
})