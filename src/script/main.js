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


/*  delete
// CONTAINER SLIDER IMAGE
// const clickSiderLeft = document.querySelector(".clickSiderLeft")
// const clickSiderRigth = document.querySelector(".clickSiderRigth")
// const containerSliderImage = document.querySelector(".containerSliderImage")
// const buttonSliderImg = document.querySelectorAll(".itemButtonRow1 .buttonSliderImg")
// const buttonSliderImgRow = document.querySelectorAll(".itemButtonRow2 .buttonSliderImg")
// const containerSliderImageRoll = document.querySelector(".containerSliderImageRoll")
// containerSliderImage.style.width ="100%"
// console.log(containerSliderImage.style.backgroundColor = "orange")


// // CONTAINER SLIDER IMAGE WHEEL
// containerSliderImage.addEventListener("wheel", (e)=>{
//     // e.preventDefault()
// })
// // CONTAINER SLIDER IMAGE CLICK SLIDER LEFT
// clickSiderLeft.addEventListener("click", (e)=>{
//     containerSliderImage.style.scrollBehavior = "smooth"
//     containerSliderImage.scrollLeft -= window.
// })
// // CONTAINER SLIDER IMAGE CLICK SLIDER RIGHT
// clickSiderRigth.addEventListener("click", (e)=>{
//     containerSliderImage.style.scrollBehavior = "smooth"
//     containerSliderImage.scrollLeft += 500
// })
// // CHANEG BACK GROUND COLOR BUTON SLIDER IMAEG
// const changeBackGroundColor = (first = null) => {
//     buttonSliderImg.forEach(button => {
//         button.style.backgroundColor = "rgb(203, 203, 203)"
//     });
//     if(first)buttonSliderImg[0].style.backgroundColor = "red"
// }
// // CHANGE BACK GROUND COLOR BUTTON SILIDER IMAGE
// const changeBackGroundColorRow = (first = null) => {
//     buttonSliderImgRow.forEach(button => {
//         button.style.backgroundColor = "rgb(203, 203, 203)"
//     });
//     if(first)buttonSliderImgRow[0].style.backgroundColor = "red"
// }
// // CLICK BUTTON SLIDER IMAGE ROW 1
// for(let i = 0; i < buttonSliderImg.length ; i ++){
//     buttonSliderImg[i].addEventListener("click",(e)=>{
//         changeBackGroundColor()
//         containerSliderImage.style.scrollBehavior = "smooth"
//         containerSliderImage.scrollLeft = (i * (window.innerWidth  - 195))  
//         buttonSliderImg[i].style.backgroundColor = "red"     
//     })
// }
// // CLICK BUTTON SLIDER IMAGE ROW 2
// for (let i = 0 ; i < buttonSliderImgRow.length ; i++){
//     buttonSliderImgRow[i].addEventListener('click',(e)=> {
//         changeBackGroundColorRow()
//         containerSliderImage.style.scrollBehavior = "smooth"    
//         containerSliderImage.scrollLeft = (i * (window.innerWidth - 198.5))   
//         buttonSliderImgRow[i].style.backgroundColor = "red"  
//     })
// }
// // FUNCTION SCROLL BEHAVIOR CONATINER SLIDER IMAGE
// const scrollBehaviorContainerSliderImage = () => {
//    containerSliderImage.style.scrollBehavior = "smooth"
//    containerSliderImage.scrollLeft = 0  
// }
// /// RESIZE WINDOW INNDER WIDTH
// window.addEventListener("resize", (e)=> {
//     scrollBehaviorContainerSliderImage()
//     changeBackGroundColor("first")
//     changeBackGroundColorRow("first")
// })

*/

const left =  document.getElementById("#left")
const right = document.getElementById("#right")
const container = document.querySelector('.container')
const itembutton = document.querySelectorAll(".itembutton")
const itembuttonclick = document.querySelectorAll(".itembuttonclick")

left.addEventListener("click", (e)=> {
container.style.scrollBehavior = "smooth"
container.scrollLeft -= 1130
})
right.addEventListener("click", (e)=> {
container.style.scrollBehavior = "smooth"
container.scrollLeft += 1130
})

for (let i = 0; i < itembutton.length ; i ++){
    itembutton[i].addEventListener("click", e=>{
        container.style.scrollBehavior = "smooth"
        container.scrollLeft = (i * 760 )
    })
}
for (let i = 0; i < itembuttonclick.length; i++){
    itembuttonclick[i].addEventListener("click", e => {
        container.style.scrollBehavior = "smooth"
        container.scrollLeft =  ( i * 390)
    })
}