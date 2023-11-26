//1. Crea un script que llame a una función que compruebe la validez de un DNI.
const scanner = require("prompt-sync")({ sigint: true });
const letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKE';

const dniUsuario = scanner("Escriba su DNI: ");

if (
  dniUsuario.length === 9 &&
  !isNaN(dniUsuario.slice(0, 8)) &&
  letrasValidas[(parseInt(dniUsuario.slice(0, 8)) % 23)] === dniUsuario[8].toUpperCase()
) {//uso el %23 porque quiero que me salgan las letras del 0 al 22 por el residuo de la división
        //slice lo utilizo para que de una cadena me salgan los 8 primeras letras que corresponden a un DNI
  console.log("El DNI es válido.");
} else {
  console.log("El DNI no es válido.");
}
