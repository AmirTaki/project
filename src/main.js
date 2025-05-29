let iconQuery = document.querySelector('.icon-query')
let iconSearchHeart = document.getElementById("icon-search-heart")
let listUl = document.querySelectorAll(".list-main-item-title")
let listLi = document.querySelectorAll(".list-main-item-title div")


const hiddenListLi = ()=> {
    for (let i = 0; i < listLi.length; i++){
        listLi[i].style.display = 'none'
    }
}
const showListLi = ()=> {
      for (let i = 0; i < listLi.length; i++){
        listLi[i].style.display = ''
    }
}
// resize
const resize_window = () => {
    if (window.innerWidth < 850){
        iconQuery.style.display = ""
        iconSearchHeart.className = "bi bi-search"
        hiddenListLi ()
    }
    else {
        iconQuery.style.display = "none"
        iconSearchHeart.classList = 'bi bi-heart'
        showListLi()
    }
}
// resize
window.addEventListener("resize",(e)=> {
  resize_window()
})
resize_window()



for (let i = 0; i< listUl.length; i++ ){
    listUl[i].addEventListener("click", (event)=>{
       console.log("ok")
        listLi[i].style.display = ""
    })
}