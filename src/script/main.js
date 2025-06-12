const searchIconInput = document.querySelector(".searchIcon input")
const iconSearch = document.querySelector(".searchIcon .bi-search")


searchIconInput.addEventListener("focus", (e)=> {
    iconSearch.style.opacity = 0
})

searchIconInput.addEventListener("focusout", (e)=> {
    iconSearch.style.opacity = 1
})