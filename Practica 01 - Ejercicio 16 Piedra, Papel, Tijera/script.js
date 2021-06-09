// jugarPiedraPapelTijeras(jugadoraA, jugadoraB, jugadasA, jugadasB)
// Crear una función jugarPiedraPapelTijeras que tome como argumentos dos strings jugadoraA y jugadoraB con los nombres de cada jugadora respectivamente, y dos 
// arrays de strings jugadasA y jugadasB con jugadas de Piedra, Papel o Tijera, de la misma longitud. La función debe devolver un string con el nombre de la ganadora o 
// Empate en caso de que no haya ninguna. Para eso, debe comparar las mismas posiciones de cada array de jugadas, y sumar puntos a la jugadora correspondiente. 
// Por ejemplo:
// const jugadasA = ["piedra", "piedra", "tijera"];
// const jugadasB = ["papel", "tijera", "tijera"];
// // jugadasA[0] vs. jugadasB[0] -> Gana B
// // jugadasA[1] vs. jugadasB[1] -> Gana A
// // jugadasA[2] vs. jugadasB[2] -> Empate
// // Resultado final: Empate
// jugarPiedraPapelTijeras("Ada", "Grace", ["tijera"], ["piedra"]); // Grace
// jugarPiedraPapelTijeras("Ada", "Grace", ["papel"], ["papel"]); // Empate
// jugarPiedraPapelTijeras( "Ada","Grace",["piedra", "papel", "papel", "piedra", "tijera"], ["papel", "piedra", "tijera", "tijera", "papel"]); // Ada

const jugarPiedraPapelTijeras = (jugadoraA, jugadoraB, jugadasA, jugadasB) => {
    
    let resultadoA = []
    let resultadoB = []

    for(let i=0; i < jugadasA.length; i++){
        if(jugadasA[i] === 'piedra') {
            if (jugadasB[i] === 'tijera'){
                resultadoA.push('1')
            } else if(jugadasB[i] === 'papel'){
                resultadoB.push('1')
            } else {
                resultadoA.push('1')
                resultadoB.push('1')
            }
        } else if(jugadasA[i] === 'papel') { 
            if (jugadasB[i] === 'piedra') {
                resultadoA.push('1')
            } else if (jugadasB[i] === 'tijera') {
                resultadoB.push('1')
            } else {
                resultadoA.push('1')
                resultadoB.push('1')
            }
        } else if (jugadasA[i] === 'tijera') {
            if (jugadasB[i] === 'papel') {
                resultadoA.push('1')
            } else if (jugadasB[i] === 'piedra') {
                resultadoB.push('1')
            } else {
                resultadoA.push('1')
                resultadoB.push('1')
            }
        } 
    }

    if(resultadoA.length > resultadoB.length ){
        return `${jugadoraA} es la ganadora`
    } else if (resultadoA.length === resultadoB.length) {
        return `Empate`
    } else {
        return `${jugadoraB} es la ganadora`
    }

}

console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['tijera'], ['piedra'])) // Grace
console.log(jugarPiedraPapelTijeras('Ada', 'Grace', ['papel'], ['papel'])) // Empate
console.log(jugarPiedraPapelTijeras(
  'Ada',
  'Grace',
  ['piedra', 'tijera', 'papel', 'piedra', 'tijera'],
  ['papel', 'piedra', 'tijera', 'tijera', 'papel']
)) // Ada