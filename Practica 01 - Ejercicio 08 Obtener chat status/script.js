// obtenerChatStatus(usuarias)
// Crear una función obtenerChatStatus que tome como argumento un array de strings usuarias y devuelva un string con el status del chat. Las reglas son:

// Para una usuaria, debe mostrar: NOMBRE_USUARIA_1 está conectada
// Para dos usuarias, debe mostrar: NOMBRE_USUARIA_1 y NOMBRE_USUARIA_2 + están conectadas
// Para más de dos usuarias, debe mostrar: NOMBRE_USUARIA_1, NOMBRE_USUARIA_2 y X persona(s) más están conectadas
// Ejemplo:

// obtenerChatStatus(["Ada"]); // 'Ada está conectada'
// obtenerChatStatus(["Ada", "Grace"]); // 'Ada y Grace están conectadas'
// obtenerChatStatus(["Ada", "Grace", "Marie"]); // 'Ada, Grace y 1 persona(s) más están conectadas'


const obtenerChatStatus = (usuarias) => {
    switch (usuarias.length){
        case 1: return (`${usuarias[0]} está conectada`);
        break;
        case 2: return (`${usuarias[0]} y ${usuarias[1]} estan conectadas`);
        break;
        default: return (`${usuarias[0]}, ${usuarias[1]} y ${usuarias.length - 2} persona(s) mas estan conectadas`);
    }
}

console.log(obtenerChatStatus(["Ada"]));
console.log(obtenerChatStatus(["Ada", "Grace"]));
console.log(obtenerChatStatus(["Ada", "Grace", "Marie"]));



