const prompt = require("prompt-sync")({sigint:true});

function esNumeroPar(numero) {
    return numero % 2 === 0;
}

function esNumeroValido(valor) {
    return !isNaN(valor) && valor !== '' && valor !== null;
}

while (true) {
    let entrada = prompt("Ingrese un número o escriba 'salir' para terminar: ");

    if (entrada.toLowerCase() === 'salir') {
        console.log("Saliendo del programa.");
        break;
    }

    if (esNumeroValido(entrada)) {
        let numero = parseFloat(entrada);

        if (esNumeroPar(numero)) {
            console.log(numero + " es un número par.");
        } else {
            console.log(numero + " no es un número par.");
        }
    } else {
        console.log("Por favor, ingrese un número válido.");
    }
}
