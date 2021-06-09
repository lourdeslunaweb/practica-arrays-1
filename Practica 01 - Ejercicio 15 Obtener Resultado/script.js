// obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB)
// Crear una función obtenerResultado que tome como argumentos dos strings jugadoraA 
// y jugadoraB con los nombres de cada jugadora respectivamente, y dos arrays de numeros 
// puntajesA y puntajesB de la misma longitud. La función debe devolver un string con el 
// nombre de la ganadora o Empate en caso de que no haya ninguna. Para eso, debe comparar 
// las mismas posiciones de cada array de puntajes, y sumar puntos a la jugadora correspondiente 
// dependiendo de quien tenga el puntaje más alto. Por ejemplo:

// const puntajesA = [3, 5, 2];
// const puntajesB = [4, 6, 2];

// // puntajesA[0] vs. puntajesB[0] -> Gana B
// // puntajesA[1] vs. puntajesB[1] -> Gana B
// // puntajesA[2] vs. puntajesB[2] -> Empate

// // Resultado final: Gana Jugadora B
// obtenerResultado("Ada", "Grace", [4, 4, 4], [1, 2, 3]); // Ada
// obtenerResultado("Ada", "Grace", [3, 5, 5, 7], [4, 1, 2, 9]); // Empate
// obtenerResultado("Ada", "Grace", [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]); // Grace

const obtenerResultado = (jugadoraA, jugadoraB, puntajesA, puntajesB) => {
    let resultadoA = []
    let resultadoB = []

    for(let i=0; i < puntajesA.length; i++){
        if(puntajesA[i] > puntajesB[i]){
            resultadoA.push(puntajesA[i])
        } else { resultadoB.push(puntajesB[i]) }
    }

    if(resultadoA.length > resultadoB.length ){
        return `${jugadoraA} es la ganadora`
    } else if (resultadoA.length === resultadoB.length) {
        return `empate`
    } else {
        return `${jugadoraB} es la ganadora`
    }

}

console.log(obtenerResultado("Ada", "Grace", [4, 4, 4], [9, 2, 2]));
console.log(obtenerResultado("Ada", "Grace", [3, 5, 5, 7], [4, 1, 2, 9]));
console.log(obtenerResultado("Ada", "Grace", [5, 6, 3, 1, 8], [8, 2, 4, 2, 3]));
console.log(obtenerResultado("Rafaela", "Maxima", [58, 101], [4, 21]));
console.log(obtenerResultado("Puchal", "Gangue", [32, 24, 81, 33, 15], [39, 5, 8, 122, 7]));