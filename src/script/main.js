// CONTAINER SCROLL IMAGE
// let iconLeftScrollImg = document.querySelector(".iconLeftScrollImg")
// let iconRigthtScrollImg = document.querySelector(".iconRigthtScrollImg")
// let containerScroll = document.querySelector(".containerScroll")

// // CONTAINER SCROLL IMAGE WHELL
// containerScroll.addEventListener("wheel",(e)=>{
//     e.preventDefault()
//     containerScroll.scrollLeft += e.deltaY;
// })
// // CONTAINER SCROLL IMAGE CLICK LEFT
// iconLeftScrollImg.addEventListener("click",(e)=>{
//     containerScroll.style.scrollBehavior = "smooth";
//     containerScroll.scrollLeft -= 300
// })
// // CONTAINER SCROLL IMAGE CLICK RIGHT
// iconRigthtScrollImg.addEventListener("click",(e)=>{
//     containerScroll.style.scrollBehavior = "smooth";
//     containerScroll.scrollLeft += 300
// })

// CONTAINER SLIDER IMAGE
const clickSiderLeft = document.querySelector(".clickSiderLeft")
const clickSiderRigth = document.querySelector(".clickSiderRigth")
const containerSliderImage = document.querySelector(".containerSliderImage")

clickSiderLeft.addEventListener("click", (e)=>{
    containerSliderImage.style.scrollBehavior = "smooth"
        containerSliderImage.scrollLeft -= 1000
        console.log(window.innerWidth)
    // if(window.innerWidth > 800){
    //     containerSliderImage.scrollLeft -= 1000
    // }
    // else {
    //     containerSliderImage.scrollLeft -= 825
    // }
    
})
clickSiderRigth.addEventListener("click", (e)=>{
    containerSliderImage.style.scrollBehavior = "smooth"
        containerSliderImage.scrollLeft += 1000
              console.log(window.innerWidth)

    // if(window.innerWidth > 800){
    //     containerSliderImage.scrollLeft += 1000
    // }
    // else {
    //     containerSliderImage.scrollLeft += 825
    // }
})