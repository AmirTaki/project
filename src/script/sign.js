let form = document.querySelector('form')
let name = document.getElementById("name")
let email = document.getElementById('email')
let password = document.getElementById('password')
let repeatPassword = document.getElementById("repeat-password")
let button = document.getElementById("button")
let span = document.querySelectorAll("span")
let input = document.querySelectorAll("input")


console.log(span)
const checkName = () => {
   
    if (name.value.length == 0){
        span[0].innerText = "name is required"
        span[0].style.color = 'red'
        input[0].style.borderColor = "red"
    }
}

button.addEventListener('click', (e)=>{
    e.preventDefault()
    checkName()
})

