let iconQuery = document.querySelector('.icon-query')
let iconSearchHeader = document.querySelector(".header-search  .bi-search") 
// resize
const resize_window = () => {
    if (window.innerWidth < 850){
        iconQuery.style.display = ""
        iconSearchHeader.style.display = ""
    }
    else {
        iconQuery.style.display = "none"
        iconSearchHeader.style.display = "none"
    }
}
// resize
window.addEventListener("resize",(e)=> {
  resize_window()
})
resize_window()


