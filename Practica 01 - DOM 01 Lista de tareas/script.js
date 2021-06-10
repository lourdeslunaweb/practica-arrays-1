// Crear un programa que muestre:

// un input de texto
// un botón que diga Agregar tarea
// una lista ul
// Cuando se hace click en el botón, se debe agregar el valor del input a un array y actualizar la lista.

// Para actualizar la lista se debe:

// borrar todo lo que contenga
// recorrer el array y por cada ítem
// insertar un ítem de lista li con el valor del ítem del array


const input = document.getElementById("input");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");
let arrayTareas = []

const agregarTarea = () => {
    const text = input.value
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    
    arrayTareas.push(text)
    console.log(arrayTareas)

    li.appendChild(p);
    ul.appendChild(li)

    input.value = ""
}

btn.addEventListener("click", agregarTarea)