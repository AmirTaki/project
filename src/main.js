let pageMove = document.querySelector(".page-move")
let crossPage = document.querySelector('.cross-page-move i')
let headerUp = document.querySelector(".header-up")
let header = document.querySelector("header")
let iconQuery = document.querySelector('.icon-query')
let iconSearchHeart = document.getElementById("icon-search-heart")
let listUl = document.querySelectorAll(".title-ul")
let listLi = document.querySelectorAll(".item-li")
let iconListUl = document.querySelectorAll('.title-ul i')
let footer = document.querySelector(".container-footer")
let footerBlack = document.querySelector(".footer-black")
let upperFooter = document.querySelectorAll(".upper-footer div")
let headerLi = document.querySelectorAll(".header-item li")
let megaMenu = document.querySelector(".all-megaMenu")
let headerItem = document.querySelector('.header-item')
let  iconHeart = document.querySelectorAll(".heart-click")
let arrowLeft = document.querySelector(".bi-arrow-left-square")
let arrowRight = document.querySelector(".bi-arrow-right-square")
let scrollImg = document.querySelector(".scroll-img")

// Page Move
headerUp.addEventListener("click", (evnet)=> {
    pageMove.classList.remove("page-move-animation-reverse")
    pageMove.classList.add("page-move-animation")
})
crossPage.addEventListener("click", (evnet)=> {
    pageMove.classList.remove("page-move-animation")
    pageMove.classList.add("page-move-animation-reverse")
})

// megaMenu
for (let i = 0;  i < headerLi.length ; i++){
    headerLi[i].addEventListener("mousemove", (event)=>{
        megaMenu.classList.remove("deactive")
    })
}

megaMenu.addEventListener("mouseleave",()=>{
    megaMenu.classList.add("deactive")
})

// icon Heart
for (let i = 0; i< iconHeart.length ; i++){
    iconHeart[i].addEventListener("click",()=>{
        iconHeart[i].className = iconHeart[i].className === "bi bi-heart-fill heart-click" ? "bi bi-heart heart-click" : "bi bi-heart-fill heart-click"
    })
}


// arrow left & arrow right scroll image
arrowLeft.addEventListener("click", e =>{
    scrollImg.style.scrollBehavior = "smooth"
    scrollImg.scrollLeft -= 900
})
arrowRight.addEventListener("click", e =>{
    scrollImg.style.scrollBehavior = "smooth"
    scrollImg.scrollLeft += 900
})

// scroll sidebar wheel
scrollImg.addEventListener("wheel", e => {
    e.preventDefault();
    scrollImg.scrollLeft += e.deltaY
})
// 
const hiddenListLi = ()=> {
    for (let i = 0; i < listLi.length; i++){
        listLi[i].style.display = 'none'
        iconListUl[i].className = "bi bi-chevron-down"
    }
}
const showListLi = ()=> {
      for (let i = 0; i < listLi.length; i++){
        listLi[i].style.display = ''
    }
}

// footer hide border rigth
const hideBorderRight = () => {
    for(let i = 0; i < upperFooter.length ; i++)
        if (i === upperFooter.length - 1){
            upperFooter[i].style.borderRight = "none"
        }
}

// resize
const resize_window = () => {
    if (window.innerWidth < 850){
        iconQuery.style.display = ""
        iconSearchHeart.className = "bi bi-search"
        hiddenListLi ()
        footer.style.display = "none"
        footerBlack.style.display = ""
    }
    else {
        iconQuery.style.display = "none"
        iconSearchHeart.classList = 'bi bi-heart'
        showListLi()
        footer.style.display = ""
        footerBlack.style.display = "none"
        hideBorderRight()
    }
}
// resize
window.addEventListener("resize",(e)=> {
  resize_window()
})
resize_window()
hideBorderRight()

//scroll
window.addEventListener("scroll", ()=> {
    if (document.documentElement.scrollTop >= 155){
        
        header.className ="header-animation"
        megaMenu.classList.add("deactive")
        
    }
    else {
        header.className ="header-animation-reverse"    
    }
})


for (let i = 0; i< listUl.length; i++ ){
    listUl[i].addEventListener("click", (event)=>{
        if (window.innerWidth < 850){
            listLi[i].style.display = listLi[i].style.display === "none" ? "" : "none"
            iconListUl[i].className = iconListUl[i].className === "bi bi-chevron-up" ? "bi bi-chevron-down" : "bi bi-chevron-up"
        }
       
    })
}




