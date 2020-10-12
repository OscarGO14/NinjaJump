var character = document.getElementById("character")
var block = document.getElementById("block")

// Funcion salto
function jump() {
    if (character.classList != 'animate') {
        character.classList.add('animate')
    }
    setTimeout(() => {
        character.classList.remove('animate')
    }, 800);
}

// Checkear muerte
var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'))
    if (blockLeft < -25 && blockLeft >= -80 && characterTop >= 250) {
        block.style.animation = "none"
        block.style.display = "none"
        block.classList.remove('hard')
        stop()
        alert('Perdiste!!!')
    }
}, 10)


// Puntuacion
const puntos = document.getElementById('puntuacion')

let contador = 0;

const puntuacion = setInterval(() => {
    contador += 100
    puntos.innerHTML = 'Puntuación: ' + contador
    return contador
}, 1200)
const stop = () => clearInterval(puntuacion)


// HardMode

const hardMode = setInterval(() => {
    if (block.classList != 'hard') {
        block.classList.add('hard')
    }
}, 8400);
