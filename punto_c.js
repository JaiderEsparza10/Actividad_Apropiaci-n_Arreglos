// En pareja, elijan un elemento compartido en su entorno (puede ser: computador
// del aula, una libreta, una prenda, una herramienta, etc.).

// Se crea el objeto

let balon_de_futbol = {
    "color": "blanco",
    "tamaño": "5",
    "categoria": "champions league",
    "marca": "Adidas" 
}

// Se muestran las propiedades del objeto
for (let propiedad in balon_de_futbol) {
    console.log(propiedad + ": " + balon_de_futbol[propiedad]);
}

// Reflexión compartida: ¿Por qué un objeto representa mejor a ese elemento que un arreglo?
// Respuesta: Por que cuando hablamos de algo con caracteristicas especificas es mejor crear un objeto ya que podemos definir sus propiedades y valores.