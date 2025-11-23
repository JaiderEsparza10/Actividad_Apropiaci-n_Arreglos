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

// c. En pareja, discutan y escriban una conclusión breve:
// i. ¿Cuándo es más útil for?
// Respuesta: El ciclo for es mas recomendable cuando necesita conocer y utilizar el índice posición del elemento dentro del bucle 
// (por ejemplo, para modificar un elemento en esa posición, o para iterar en sentido inverso).
// ii. ¿Cuándo es más útil for...of?
// Respuesta: Es más util cuando Solo te interesa el valor del elemento y quieres un código 
// más claro y conciso para leer los datos de un array o de cualquier objeto iterable.