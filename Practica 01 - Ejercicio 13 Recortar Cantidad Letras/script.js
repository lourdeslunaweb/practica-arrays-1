// recortar(cantidadLetras, palabras)
// Crear una función recortar que tome como argumentos un número cantidadLetras y un array de 
// strings palabras y devuelva un array con las mismas palabras pero recortadas. Las palabras 
// se recortan dejando cantidadLetras letras al iniciando, y recortando las demás. 
// Por ejemplo, elefante recortada a 4 letras queda elef.

// recortar(4, ['elefante', 'dinosaurio'. 'chocolate', 'avion', 'america']) // ['eleft', 'dino' 'chocolate', 'avio', 'amer']
// recortar(1, ['algoritmo', 'bug', 'compilador']) // ['a', 'b', 'c']

const recortar = (cantidadLetras, palabras) => {
    let coleccion=[]
    for (const palabra of palabras ){
        
        coleccion.push(palabra.slice(0, cantidadLetras))
        
    }
    return coleccion
}
console.log(recortar(4, ['elefante', 'dinosaurio', 'chocolate', 'avion', 'america']))
console.log(recortar(1, ['algoritmo', 'bug', 'compilador']))