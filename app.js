mensajes();
let maximo = 10;
let numeroSorteado = [];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
let numerosElegidos = [];

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*maximo)+1;
    if (numeroSorteado.length == maximo) {
        asignarTexto('p','No quedan números por sortear, reinicia el juego');
    } else {
        if (numeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTexto(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function intentoJugador() {
    let numeroUsuario = parseInt(document.getElementById('numeroPlayer').value);
    numerosElegidos.push(numeroUsuario);
    if (numeroUsuario === numeroSecreto) {
        asignarTexto("p" , `Felicidades, adivinaste el numero!!, lo acertaste en: ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        asignarTexto("h1" , "GANASTE!!");
        document.querySelector('#reiniciar').disabled = false;
    } else { 
        if (numeroUsuario < numeroSecreto) {
            asignarTexto("p", "El número es mayor, intenta de nuevo");
        } else if (numeroUsuario > numeroSecreto && numeroUsuario <= maximo) {
            asignarTexto("p", "El número es menor, intenta de nuevo");
        } else {
            if (numeroUsuario > maximo) {
                asignarTexto("p",`NUMERO ERRÓNEO!!, pon un numero entre 1 y ${maximo}`);
            }
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput() {
    let limpiar = document.querySelector('#numeroPlayer').value = '';
    return;
}

function mensajes() {
    asignarTexto("p", 'Adivina el número entre 1 y 10');
    asignarTexto("h1", 'Juego de Adivinanza');
}

function nuevoJuego() {
    numerosElegidos.length = 0;
    intentos = 1;
    mensajes();
    numeroSecreto = generarNumeroSecreto();
    document.querySelector('#reiniciar').disabled = true;
    limpiarInput();
    return;
}

