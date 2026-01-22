let convertButton = document.querySelector('.convert')

convertButton.addEventListener('click', musicConverter)

function musicConverter() {
    const textOutput = document.getElementById('output');
    textOutput.value = "Hier komt dan muziek te staan";

    const ASCII = document.querySelector('.ASCII');
    ASCII.value = "";
}
