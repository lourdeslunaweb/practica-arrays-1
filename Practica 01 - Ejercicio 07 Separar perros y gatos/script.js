// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros 
// agrupados por un lado y los gatos por otro. Ejemplo:

// separar("🐶🐱🐶🐱🐱🐶🐶"); // '🐶🐶🐶🐶🐱🐱🐱'


let animales = ('🐶🐱🐶🐱🐱🐶🐶')
let listaAnimales = Array.from(animales)


function separar(animales) {
    listaAnimales.sort()
    return listaAnimales.join('')
}


console.log(separar('🐶🐱🐶🐱🐱🐶🐶'))


