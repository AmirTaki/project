let iconLeftScrollImg = document.querySelector(".iconLeftScrollImg")
let iconRigthtScrollImg = document.querySelector(".iconRigthtScrollImg")
let containerScroll = document.querySelector(".containerScroll")


containerScroll.addEventListener("wheel",(e)=>{
    e.preventDefault()
    containerScroll.scrollLeft += e.deltaY;
})
iconLeftScrollImg.addEventListener("click",(e)=>{
    containerScroll.style.scrollBehavior = "smooth";
    containerScroll.scrollLeft -= 300
})
iconRigthtScrollImg.addEventListener("click",(e)=>{
    containerScroll.style.scrollBehavior = "smooth";
    containerScroll.scrollLeft += 300
})