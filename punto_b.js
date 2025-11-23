// UTILIZAMOS EL ARREGLO QUE QUEDÓ DEL EJERCICIO ANTERIOR
let verduras = ["Zanahoria" , "Espinacas" , "pimenton" , "Cebolla"];
console.log("---- FOR ----");
// 1. AHORA CREAMOS EL CICLO FOR PARA RECORRER EL ARREGLO POR INDICE Y VALORA
for (let i = 0; i < verduras.length; i++){
    console.log("Posición [" + i + "] Verdura: " ,verduras[i]);
}
console.log("---- FOR OF ----");

// 2.AHORA UTILIZAMOS EL ´CICLO FOR OF´ PARA MOSTRAR SOLO VALORES
for (const verdura of verduras){
    console.log(verdura);
    
}