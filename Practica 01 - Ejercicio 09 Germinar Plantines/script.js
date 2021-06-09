// germinar(plantines)
// Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱). 
// El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en 
// flores. El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

// germinar("🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱"); // '🌷🌷🌻🌻🌸🌸🌷🌷🌻🌻🌸🌸'
// germinar("🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱"); // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
// germinar("🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱"); // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'

const germinar = (flores) => {
    let floresArray = Array.from(flores);
    for (let i = 0; i < floresArray.length; i++){
        if (floresArray[i] === '🌱'){
            floresArray[i] = floresArray[i-1];
            
        }
    }return floresArray.join('')
}

console.log(germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱'));
console.log(germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱'));
console.log(germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱'));