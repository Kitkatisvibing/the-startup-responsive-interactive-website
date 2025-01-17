const image = document.querySelector("image")

image.addEventListener('mouseover', Enlarge)

function Enlarge (){
    image.classList.toggle('larger')
}