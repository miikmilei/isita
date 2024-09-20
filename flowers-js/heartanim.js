const texto = document.getElementById('texto');
const contenido = "Estas en la mitad de la carta, esta carta la hago con la cantidad de pensamientos y poemas que he pensado en estos dias que volvimos hablar, sabes mi niña, te amo, eres todo lo que busco en una chica, ¿Seguimos viendo la carta?\n\n";

let index = 0;

function escribirTexto() {
    if (index < contenido.length) {
        texto.innerHTML += contenido.charAt(index);
        index++;
        texto.scrollTop = texto.scrollHeight; // Desplaza hacia abajo
        setTimeout(escribirTexto, 10); // Ajusta la velocidad de escritura

    }
}

escribirTexto();

function continuar_button(){
    console.log("redirect")
    window.location.href = "./newheart.html";
}