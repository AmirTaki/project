let iconQuery = document.querySelector('.icon-query')

// resize
const resize_window = () => {
    if (window.innerWidth < 850){
        iconQuery.style.display = ""
    }
    else {
        iconQuery.style.display = "none"
    }
}
// resize
window.addEventListener("resize",(e)=> {
  resize_window()
})
resize_window()


