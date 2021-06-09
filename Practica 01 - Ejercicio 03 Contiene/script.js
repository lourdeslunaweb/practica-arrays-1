// contiene(numero, numeros)
// Crear una función contiene que tome como argumentos un número numero y un array de números numeros y devuelva true o false dependiendo de 
//si dicho numero se encuentra en el array de numeros. Ejemplo:
// contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]); // true
// contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]); // false

let numero
let numeros

const contiene = (numero, numeros) => {
    numero = numeros.includes(numero)
    console.log(numero);
}


contiene(54, [5, 7, 99, 3, 4, 54, 2, 12]); //true
contiene(103, [5, 7, 99, 3, 4, 54, 2, 12]); //false
contiene(99, [5, 7, 99, 3, 4, 54, 2, 12]); //true
contiene(2, [5, 7, 99, 3, 4, 54, 2, 12]); //true
contiene(15, [5, 7, 99, 3, 4, 54, 2, 12]); //false