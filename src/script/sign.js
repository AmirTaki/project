let form = document.querySelector('form')
let name = document.getElementById("name")
let email = document.getElementById('email')
let password = document.getElementById('password')
let repeatPassword = document.getElementById("repeat-password")
let button = document.getElementById("button")
let span = document.querySelectorAll("span")
let input = document.querySelectorAll("input")
let icon = document.querySelectorAll("form i")


const checkName = () => {
   
    if (name.value.length == 0){
        span[0].innerText = "Name is required"
        span[0].style.color = 'red'
        input[0].style.borderColor = "red"
        icon[0].className = "bi bi-x-circle"
        icon[0].style.color = "red"
        return false
    }
    else if(!name.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        span[0].innerText = "Write full Name"
        span[0].style.color = 'red'
        input[0].style.borderColor = "red"
        icon[0].className = "bi bi-x-circle"
        icon[0].style.color = "red"
        return false
    }
    else {
        span[0].innerText = ""
        span[0].style.color = 'green'
        input[0].style.borderColor = "black"
        icon[0].className = "bi bi-check-circle"
        icon[0].style.color = "green"
        return true
    }
}

const checkEmail = () => {
    if (email.value.length == 0){
        span[1].innerText = "Email is required"
        span[1].style.color = 'red'
        input[1].style.borderColor = "red"
        icon[1].className = "bi bi-x-circle"
        icon[1].style.color = "red"
        return false
    }
    else if(!email.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        span[1].innerText = "Write full Email"
        span[1].style.color = 'red'
        input[1].style.borderColor = "red"
        icon[1].className = "bi bi-x-circle"
        icon[1].style.color = "red"
        return false
    }
    else {
        span[1].innerText = ""
        span[1].style.color = 'green'
        input[1].style.borderColor = "black"
        icon[1].className = "bi bi-check-circle"
        icon[1].style.color = "green"
        return true
    }
}

const checkPassword = () => {
    if (password.value.length == 0){
        span[2].innerText = "Password is required"
        span[2].style.color = 'red'
        input[2].style.borderColor = "red"
        icon[2].className = "bi bi-x-circle"
        icon[2].style.color = "red"
        return false
    }
    else if(!password.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)){
        span[2].innerText = "Password should contain 1Uppercase, 1Lowecase, 1 Digit & 1Alphabet "
        span[2].style.color = 'red'
        input[2].style.borderColor = "red"
        icon[2].className = "bi bi-x-circle"
        icon[2].style.color = "red"
        return false
    }
    else {
        span[2].innerText = ""
        span[2].style.color = 'green'
        input[2].style.borderColor = "black"
        icon[2].className = "bi bi-check-circle"
        icon[2].style.color = "green"
        return true
    }
}



button.addEventListener('click', (e)=>{
    e.preventDefault()
    checkName()
    checkEmail()
    checkPassword()
})

