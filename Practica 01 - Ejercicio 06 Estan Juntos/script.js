// estanJuntos(personajes)
// Crear una función estanJuntos que tome como argumento un array de strings personajes, y devuelva true si Sam se 
// encuentra al lado de Frodo, ya sea antes o después, o false sino. Ejemplo:
// estanJuntos(["Sam", "Frodo", "Legolas"]); //true
// estanJuntos(["Aragorn", "Frodo", "Sam"]); //true
// estanJuntos(["Sam", "Orco", "Frodo"]); //false

let personajes

const estanJuntos = (personajes) => {
    for (let i = 0; i < personajes.length; i++) {
        if ((personajes[i] === "Frodo" && personajes[i - 1] === "Sam") || (personajes[i] === "Frodo" && personajes[i + 1] === "Sam")) {
            return true
        }
    }
    return false
}

console.log(estanJuntos(["Sam", "Frodo", "Legolas"]));
console.log(estanJuntos(["Aragorn", "bjbsjbsj", "jjscdbjdbdj", "Frodo", "Sam"]));
console.log(estanJuntos(["Sam", "Orco", "Frodo"]));

