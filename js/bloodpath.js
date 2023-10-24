//variables globales
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let avatarJugador
let avatarEnemigo


function iniciarJuego() {
// esconder section ataque y boton reiniciar
let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
sectionSeleccionarAtaque.style.display = 'none'

let sectionReiniciar = document.getElementById('reiniciar')
sectionReiniciar.style.display = 'none'


//botonSeleccionar
let botonAvatarJugador = document.getElementById('boton-avatar')
botonAvatarJugador.addEventListener('click', seleccionarAvatarJugador)

//botonesAtaque
let botonBomba = document.getElementById('boton-bomba')
botonBomba.addEventListener('click', ataqueBomba)
let botonPunal = document.getElementById('boton-punal')
botonPunal.addEventListener('click', ataquePunal)
let botonSedante = document.getElementById('boton-sedante')
botonSedante.addEventListener('click', ataqueSedante)

let botonReiniciar = document.getElementById('boton-reiniciar')
botonReiniciar.addEventListener('click', reiniciarJuego)
}

//el jugador selecciona su avatar
function seleccionarAvatarJugador(){
    let sectionSeleccionarAvatar = document.getElementById('seleccionar-avatar')

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

    let inputNinja = document.getElementById("ninja")
    let inputRobot = document.getElementById("robot")
    let inputBioquimico = document.getElementById("bioquimico")
    let inputPolicia = document.getElementById("policia")
    let inputSantaClaus = document.getElementById("santa-claus")
    let inputNina = document.getElementById("nina")
    let spanAvatarJugador = document.getElementById('avatar-jugador')

    let empezarPartida = 0

    if (inputNinja.checked){
        spanAvatarJugador.innerHTML = 'Ninja'
        avatarJugador = 1
        empezarPartida = 1
    } else if (inputRobot.checked){
        spanAvatarJugador.innerHTML = 'Robot'
        avatarJugador = 2
        empezarPartida = 1
    } else if (inputBioquimico.checked){
        spanAvatarJugador.innerHTML = 'Bioquímico'
        avatarJugador = 3
        empezarPartida = 1
    } else if (inputPolicia.checked){
        spanAvatarJugador.innerHTML = 'Policía'
        avatarJugador = 4
        empezarPartida = 1
    } else if (inputSantaClaus.checked){
        spanAvatarJugador.innerHTML = 'Santa Claus'
        avatarJugador = 5
        empezarPartida = 1
    } else if (inputNina.checked){
        spanAvatarJugador.innerHTML = 'Niña'
        avatarJugador = 6
        empezarPartida = 1
    } else {
        alert("No te olvides de seleccionar tu avatar")
        empezarPartida = 0
    }

    if (empezarPartida == 1) {
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionSeleccionarAvatar.style.display = 'none'
    seleccionarAvatarEnemigo()
    }
}

//una vez el jugador selecciona avatar, de forma aleatoria se elige el avatar del enemigo
function seleccionarAvatarEnemigo() {
    let avatarAleatorio = aleatorio(1, 6)
    let spanAvatarEnemigo = document.getElementById('avatar-enemigo')

    if (avatarAleatorio == 1){
        spanAvatarEnemigo.innerHTML = 'Ninja'
        avatarEnemigo = avatarAleatorio
    } else if (avatarAleatorio == 2)  {
        spanAvatarEnemigo.innerHTML = 'Robot'
        avatarEnemigo = avatarAleatorio
    }  else if (avatarAleatorio == 3) {
        spanAvatarEnemigo.innerHTML = 'Bioquímico'
        avatarEnemigo = avatarAleatorio
    } else if (avatarAleatorio == 4) {
        spanAvatarEnemigo.innerHTML = 'Policía'
        avatarEnemigo = avatarAleatorio
    } else if (avatarAleatorio == 5) {
        spanAvatarEnemigo.innerHTML = 'Santa Claus'
        avatarEnemigo = avatarAleatorio
    } else {
        spanAvatarEnemigo.innerHTML = 'Niña'
        avatarEnemigo = avatarAleatorio
    } 

    compararAvatares()
}

//avatar jugador y enemigo no coincidan
function compararAvatares() {

    if (avatarEnemigo == avatarJugador) {
        seleccionarAvatarEnemigo()
    }
}

//ataques
function ataqueBomba() {
    ataqueJugador = 'BOMBA'
    contraataqueEnemigo()
}

function ataquePunal() {
    ataqueJugador = 'PUÑAL'
    contraataqueEnemigo()
}

function ataqueSedante() {
    ataqueJugador = 'SEDANTE'
    contraataqueEnemigo()
}

function contraataqueEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'BOMBA'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'PUÑAL'
    } else {
        ataqueEnemigo = 'SEDANTE'
    }

    combate()
}

// COMBATE
function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if ((vidasEnemigo > 0) && (vidasJugador >0)) {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensajeBatalla("EMPATE😐")
    } else if (ataqueJugador == 'SEDANTE' && ataqueEnemigo == 'BOMBA') {
        crearMensajeBatalla("GANASTE🥳🎉")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'PUÑAL' && ataqueEnemigo == 'SEDANTE') {
        crearMensajeBatalla("GANASTE🥳🎉")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'BOMBA' && ataqueJugador == 'PUÑAL') {
        crearMensajeBatalla("GANASTE🥳🎉")
        vidasEnemigo = vidasEnemigo - 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensajeBatalla("PERDISTE😣😭")
        vidasJugador = vidasJugador - 1
        spanVidasJugador.innerHTML = vidasJugador
    }

    
    revisarVidas()
    }
}

//revisar si ganamos o perdimos la partida
function revisarVidas() {
    if(vidasEnemigo == 0) {
       crearMensajeFinal("FELICITACIONES, GANASTE!")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Lo siento, has muerto☠️")
    }
}

//mensaje resultado del ataque
function crearMensajeBatalla(resultado) {    
    let sectionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

// funcion para crear mensaje fin partida
function crearMensajeFinal(resultadoFinal) {    
    let sectionMensajes = document.getElementById('resultado')

    sectionMensajes.innerHTML = resultadoFinal

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

//declaramos funcion aleatoria
function aleatorio(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

window.addEventListener('load', iniciarJuego)