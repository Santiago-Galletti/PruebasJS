let precioTractor = 30000;
let precioGrupoElectrogeno = 10000;
let precioHidrolavadora = 5000;
let producto = prompt("Estas buscando un tractor, un grupo electrogeno o una hidrolavadora?")
let cuotas
let i

if (producto == "tractor"){
    alert("el precio del tractor es de $" + precioTractor);
    cuotas = parseInt(prompt("En cuantas cuotas lo queres pagar?"));
    for (i = 1; i <= cuotas; i++){
        alert("Perfecto! Serian " + i + " cuotas de $" + (precioTractor/i));
    }
}
else if (producto == "grupo electrogeno"){
    alert("el precio del grupo electrogeno es de $" + precioGrupoElectrogeno);
    cuotas = parseInt(prompt("En cuantas cuotas lo queres pagar?"));
    for (i = 1; i <= cuotas; i++){
        alert("Perfecto! Serian " + i + " cuotas de $" + (precioGrupoElectrogeno/i));
    }
}
else if (producto == "hidrolavadora"){
    alert("el precio de la hidrolavadora es de $" + precioHidrolavadora);
    cuotas = parseInt(prompt("En cuantas cuotas lo queres pagar?"));
    for (i = 1; i <= cuotas; i++){
        alert("Perfecto! Serian " + i + " cuotas de $" + (precioHidrolavadora/i));
    }
}
else {
    alert("No tenemos ese producto")
}

