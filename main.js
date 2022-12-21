const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const biscoito = document.querySelector(".shake")
const btnTry = document.querySelector(".btn-try")
const textLuck = document.querySelector(".textLuck")

const frases = [
    
]

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleClick() {
    toggleScreen()


}

function handleResetClick() {
    toggleScreen()
}


