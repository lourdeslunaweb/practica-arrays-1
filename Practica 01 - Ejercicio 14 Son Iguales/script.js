// Crear una función sonIguales(a, b) que tome como argumentos dos arrays a y b y devuelva true 
// si ambos arrays tienen los mismos valores en la misma posición, o false sino.

// sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]); // true
// sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]); // false
// sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]); // false

const sonIguales = (a, b) => {
    if (a.length === b.length){
        for(let i=0; i < a.length; i++){
            if (a[i] !== b[i]){
                return false
            } 
        }
        return true
    } else {
        return false
    }
}


console.log(sonIguales([10, 25, 6, 33, 48, 105], [10, 25, 6, 33, 48, 105]));
console.log(sonIguales([10, 25, 6, 33, 48, 105], [11, 25, 6, 33, 48, 105]));
console.log(sonIguales([10, 25, 6, 33, 48, 105], [25, 10, 6, 33, 48, 105]));
console.log(sonIguales([8, 21, 5], [8, 21, 5]));
console.log(sonIguales([0, 2, 9, 5], [10, 25, 6, 33, 48]));

