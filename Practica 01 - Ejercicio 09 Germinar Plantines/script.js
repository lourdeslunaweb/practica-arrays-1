// germinar(plantines)
// Crear una funciΓ³n germinar que tome como argumento un string de plantines con flores y plantines (π±). 
// El array debe comenzar con una flor. La funciΓ³n debe devolver un string con los plantines convertidos en 
// flores. El plantΓ­n se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

// germinar("π·π±π»π±πΈπ±π·π±π»π±πΈπ±"); // 'π·π·π»π»πΈπΈπ·π·π»π»πΈπΈ'
// germinar("π·π±π±π±π»π±π±πΈπ±π±π±π±"); // 'π·π·π·π·π»π»π»πΈπΈπΈπΈπΈ'
// germinar("π»πΈπ±π·π»π±π±π·π·π±π±π±"); // 'π»πΈπΈπ·π»π»π»π·π·π·π·π·'

const germinar = (flores) => {
    let floresArray = Array.from(flores);
    for (let i = 0; i < floresArray.length; i++){
        if (floresArray[i] === 'π±'){
            floresArray[i] = floresArray[i-1];
            
        }
    }return floresArray.join('')
}

console.log(germinar('π·π±π»π±πΈπ±π·π±π»π±πΈπ±'));
console.log(germinar('π·π±π±π±π»π±π±πΈπ±π±π±π±'));
console.log(germinar('π»πΈπ±π·π»π±π±π·π·π±π±π±'));