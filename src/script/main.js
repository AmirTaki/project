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
const buttonSliderImg = document.querySelectorAll(".buttonSliderImg")
// 
containerSliderImage.addEventListener("wheel", (e)=>{
    // e.preventDefault()
})
// CONTAINER SLIDER IMAGE CLICK SLIDER LEFT
clickSiderLeft.addEventListener("click", (e)=>{
    containerSliderImage.style.scrollBehavior = "smooth"
    containerSliderImage.scrollLeft -= (window.innerWidth - 195 ) 
})
// CONTAINER SLIDER IMAGE CLICK SLIDER RIGHT
clickSiderRigth.addEventListener("click", (e)=>{
    containerSliderImage.style.scrollBehavior = "smooth"
    containerSliderImage.scrollLeft += (window.innerWidth - 195 )   
})
// 
const changeBackGroundColor = (first = null) => {
    buttonSliderImg.forEach(button => {
        button.style.backgroundColor = "rgb(203, 203, 203)"
    });
    if(first)buttonSliderImg[0].style.backgroundColor = "red"
}

for(let i = 0; i < buttonSliderImg.length ; i ++){
    buttonSliderImg[i].addEventListener("click",(e)=>{
        changeBackGroundColor()
        containerSliderImage.style.scrollBehavior = "smooth"
        containerSliderImage.scrollLeft = (i * (window.innerWidth  - 195))  
        buttonSliderImg[i].style.backgroundColor = "red"     
    })
}
const scrollBehaviorContainerSliderImage = () => {
   containerSliderImage.style.scrollBehavior = "smooth"
   containerSliderImage.scrollLeft = 0  
}
window.addEventListener("resize", (e)=> {
    scrollBehaviorContainerSliderImage()
    changeBackGroundColor("first")
})