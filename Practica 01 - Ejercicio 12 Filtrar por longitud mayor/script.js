// filtrarPorLongitudMayorA(longitud, palabras)
// Crear una función filtrarPorLongitud que tome como argumentos un número longitud y un 
// array de strings palabras y que devuelva un array con las palabras que tengan una cantidad 
// de letras mayor a longitud.Ejemplo:

// filtrarPorLongitudMayorA(4, [
//     "dia",
//     "remolacha",
//     "azul",
//     "sorpresa",
//     "te",
//     "verde",
// ]); // ['remolacha', 'sorpresa', 'verde']

const filtrarPorLongitudMayorA = (longitud, palabras) => {
    let coleccion = []
        for (const palabra of palabras){
            if(palabra.length>longitud){
                coleccion.push(palabra)
            }        
        }
    return coleccion
}

console.log(filtrarPorLongitudMayorA (4, [
        'dia',
        'remolacha',
        'azul',
        'sorpresa',
        'te',
        'verde',
    ]))