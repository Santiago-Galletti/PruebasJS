
let numeroSECRETO = 7;
let numeroIngresado;
let oportunidades = 0;
const chances = 3;



while ((oportunidades < chances) && (numeroIngresado != numeroSECRETO))  { 
    oportunidades++;
    numeroIngresado = parseInt (prompt("Adivina el numero que estoy pensando del 1 al 10"))
} 

if (numeroIngresado == numeroSECRETO){
    alert ("Adivinaste bien ahi!")
}   else{
        alert("Segui parcipando!")
}