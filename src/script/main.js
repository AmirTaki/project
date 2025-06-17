let iconLeftScrollImg = document.querySelector(".iconLeftScrollImg")
let iconRigthtScrollImg = document.querySelector(".iconRigthtScrollImg")
let containerScroll = document.querySelector(".containerScroll")

iconLeftScrollImg.addEventListener("click",(e)=>{
    containerScroll.style.scrollBehavior = "smooth";
    containerScroll.scrollLeft -= 300
})
iconRigthtScrollImg.addEventListener("click",(e)=>{
    console.log("ok")
    containerScroll.style.scrollBehavior = "smooth";
    containerScroll.scrollLeft += 300
})