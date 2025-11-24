// Ejercicio D - Arreglo de objetos

// Construcción dle areglos de objetos
let arreglo_de_objetos = [
    {
        "prenda": "Camisa",
        "marca": "louis vuitton",
        "color": "Azul",
    }, 
    {
        "articulo" : "moto",
        "marca": "yamaha",
        "cilindraje": "1200cc",
        "linea" : "MT"
    }, 
    {
        "animal": "perro",
        "raza": "pastor aleman",
        "nombre": "Bartolo"
    }
]

// Se reccorre el objeto y se muestran sus propiedades
for (let i = 0; i < arreglo_de_objetos.length; i++){
    console.log(`Objeto ${i + 1}:`);
    for (let propiedad in arreglo_de_objetos[i]) {
        console.log("  " + propiedad + ": " + arreglo_de_objetos[i][propiedad]);
    }
}