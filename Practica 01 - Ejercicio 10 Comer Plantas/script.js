// comer(plantas)
// Crear una función comer que tome por parámetro un string plantas que consista en plantas, un conejo y 
// una señal de prohibido. El conejo se come todas las plantas que hay a su derecha, hasta que se encuentra 
// con la señal de prohibido. El programa debe mostrar las plantas sobrevivientes, que son todas las que 
// están a la izquierda del conejo (si hay) y a la derecha de la señal (si hay). Ejemplo:

// comer("🐰🥕🥬🥕🚫"); // ''
// comer("🥕🥬🐰🥕🥕🥕🚫"); // '🥕🥬'
// comer("🐰🥕🥬🥕🚫🥕"); // '🥕'
// comer("🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷"); // '🌱🥕🌱🌷'

const comer = (str)  => {
    let plantas = Array.from(str);
    let conejo = plantas.indexOf("🐰")
    let prohibido = plantas.indexOf ("🚫")
    
    return plantas.slice(0, conejo)
        .concat(plantas.slice(prohibido+1))
        .join('')
}

console.log(comer('🐰🥕🥬🥕🚫'))
console.log(comer ('🥕🥬🐰🥕🥕🥕🚫'))
console.log(comer ('🐰🥕🥬🥕🚫🥕'))
console.log(comer('🌱🥕🌱🐰🌱🥬🌱🌱🚫🌷'))