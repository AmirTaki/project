let iconQuery = document.querySelector('.icon-query')
let iconSearchHeart = document.getElementById("icon-search-heart")

// resize
const resize_window = () => {
    if (window.innerWidth < 850){
        iconQuery.style.display = ""
        iconSearchHeart.className = "bi bi-search"
        console.log(iconSearchHeart.classList)
    }
    else {
        iconQuery.style.display = "none"
        iconSearchHeart.classList = 'bi bi-heart'
    }
}
// resize
window.addEventListener("resize",(e)=> {
  resize_window()
})
resize_window()


