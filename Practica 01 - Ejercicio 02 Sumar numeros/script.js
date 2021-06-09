// sumar(numeros)
// Crear una función sumar que tome como argumento un array de números numeros y devuelva la suma de ellos. Ejemplo:
// sumarNumeros([5, 7, 10, 12, 24]); // 58

let numeros = [5, 7, 10, 12, 24]
let resultado = 0

const sumar = () => {
    for (let i=0; i < numeros.length; i++){
    resultado = resultado + numeros[i]
    }
}

sumar()

console.log(resultado);