// Crear una función gano que tome como argumento un array tragamonedas con 5 símbolos y devuelva true si son iguales 
// y false sino. Si el array tiene más de 5 símbolos, s´ólo debe comparar los 5 primeros.
// gano(["⭐️", "⭐️", "⭐️", "💫", "✨"]); // false
// gano(["💫", "💫", "💫", "💫", "💫"]); // true
// gano(["💫", "💫", "💫", "💫", "💫", "⭐️"]); // true

let tragamonedas

const gano = (tragamonedas) =>{
    for (let i=0; i < tragamonedas.length; i++){
    return (tragamonedas[0] === tragamonedas[1] && tragamonedas[0] === tragamonedas[2] && tragamonedas[0] === tragamonedas[3] && tragamonedas[0] === tragamonedas[4])
}  
}

console.log(gano(["💫", "💫", "💫", "💫", "💫", "⭐️"]));
console.log(gano(["⭐️", "⭐️", "⭐️", "💫", "✨" ]));
console.log(gano(["💫", "💫", "💫", "💫", "💫"]));
