const semi = document.querySelector(".semigravel")
const kopje = document.querySelector(".kopjebloemendaal")

semi.addEventListener('click', Show)

function Show (){
    kopje.classList.toggle('kopjebloemendaal')
}