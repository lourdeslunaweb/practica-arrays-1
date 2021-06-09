// obtenerMenor(numeros)
// Crear una función obtenerMenor que tome como argumento un array de números llamado "numeros" y devuelva el menor de ellos. Ejemplo:
// obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12, 27, 32, 1); //

let numeros = [5, 7, 99, 34, 54, 2, 12, 27, 32, 1]
let menor = numeros[0]

const obtenerMenor = () => {
for (let i=0; i < numeros.length; i++){
    if(numeros[i] < menor){
        menor = numeros[i]
    }
}
}

obtenerMenor()

console.log(menor);