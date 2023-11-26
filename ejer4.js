const scanner = require("prompt-sync")({sigint:true});

//nunm aleatorio de 0-100
//=== comparacion de tipo ==comprobacion normal

const aleatorio=Math.floor(Math.random()*100);
//const no se le puede asignar otra
let acierto=false;

while(!acierto){
    const numero=scanner("Introduce un número=>");

    if(EsCorrectoNum(numero)){
        if(numero==aleatorio){
          
            acierto=true; 
            
            console.log("Acierto!!!");
        }else if(numero>aleatorio){
            console.log("Es más bajo");
        }else{
            console.log("Es más alto");
        }


    }else{

        console.log("Escribe un número:");
    }

}

function EsCorrectoNum(x){

        if(Number(x)){
            return true;
        }else{
            return false;
        }
}