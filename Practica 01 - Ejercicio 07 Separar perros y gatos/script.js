// separar(perrosYGatos)
// Crear una funciΓ³n separar que tome como argumento un string con emojis de perros y gatos y devuelva un string con los perros 
// agrupados por un lado y los gatos por otro. Ejemplo:

// separar("πΆπ±πΆπ±π±πΆπΆ"); // 'πΆπΆπΆπΆπ±π±π±'


let animales = ('πΆπ±πΆπ±π±πΆπΆ')
let listaAnimales = Array.from(animales)


function separar(animales) {
    listaAnimales.sort()
    return listaAnimales.join('')
}


console.log(separar('πΆπ±πΆπ±π±πΆπΆ'))


