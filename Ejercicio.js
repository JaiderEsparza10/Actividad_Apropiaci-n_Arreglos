// CREAMOS EL ARREGLO QUE VAMOS A UTILIZAR
let verduras = ["Zanahoria" , "Espinacas" , "pimenton" , "Cebolla"];
// LUEGO MOSTRAMOS EL ARREGLO INICIAL
console.log("Lista: " ,verduras);
("Lista Inicial: " ,verduras);
// 1. AGREGAMOS UN ELEMENTO AL ULTIMO LUGAR DEL ARREGLO
verduras.push("Remolacha");
console.log("Agregamos un elemento: " ,verduras);
// 2. ELIMINAMOS EL ULTIMO ELEMENTO DEL ARREGLO
verduras.pop();
console.log("Eliminamos el ultimo elemento: " ,verduras);
// 3. AGREGAMOS UN ELEMENTO AL INICIO DEL ARREGLO
verduras.unshift("Pepino");
console.log("Agregamos un elemento al inicio: " ,verduras);
// 4. ELIMINAMOS EL PRIMER ELEMENTO
verduras.shift();
console.log("Eliminamos el primer elemento: " ,verduras);
// 5. MOSTRAMOS CUANTOS ELEMENTOS TIENE EL ARREGLO
let cantidad_elementos = verduras.length;
console.log("La cantidad de elementos es: " ,cantidad_elementos);





