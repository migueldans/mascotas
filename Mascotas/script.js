//Crear una clase Animal, a la que le pasamos dos strings: el nombre del animal y el ruido que hace.
//El Animal tiene un m�todo saludar que cuando lo llamamos devuelve el string "nombre dice ruido"(por ejemplo "mil� dice guau").
//Crear una lista de tres animales, y en un bucle mostrar el resultado de llamar su m�todo saludar en consola.


class Animal {
    constructor(nombre, ruido) {
        this.nombre = nombre;
        this.ruido = ruido;
    }
    
    saludar() {
        return this.nombre + " dice " + this.ruido;
    }
}

let animales = [new Animal("Perro", "Guau"), new Animal("Gato", "Miau"), new Animal("Pajaro", "Pio")];
animales.push(new Animal("Pato", "Quack"));

//Sacas los nombre en consola con un FOR
for (let i = 0; i < animales.length; i++) {
    console.log(animales[i].saludar());
}

////Sacas lo nombre en consola con un FOREACH
//animales.forEach(function (animal) {
//    console.log(animal.saludar());
//});

//Despu�s de a�adir un animal, mostrar en consola la lista de los animales.
function guardar() {
    let nombre = document.getElementById("nombre").value;
    let ruido = document.getElementById("ruido").value;
    animales.push(new Animal(nombre, ruido));
    console.log(animales[animales.length-1].saludar());
}

//// Crear un bot�n que al pulsarlo muestra la lista de los animales en la p�gina web
////(dentro de un div cada saludo de un animal dentro de un p�rrafo)
////Mostrar la lista entera, pero no mostrar los animales que estaban antes(es decir,
////si ya hemos mostrado dos animales anteriormente y a�adimos otro, deber�amos mostrar 3 animales,
////no los 2 primeros repetidos y el �ltimo al final).

//let resultado = "";
//animales.forEach(function (animal){
//    resultado += "<p>" + animal.saludar() + "</p>"
//});

//document.getElementById("lista_animales").innerHTML = resultado;

//function imprimir() {
//    resultado = "";
//    animales.forEach(function (animal){
//        resultado += "<p>" + animal.saludar() + "</p>";
//        document.getElementById("lista_animales").innerHTML = resultado;
//    });
//}

////En vez de mostrar los animales en p�rrafos, mostrarlos como �tems dentro de una lista.

//let resultado = "";
//animales.forEach(function (animal) {
//    resultado += "<li>" + animal.saludar() + "</li>"
//});

//document.getElementById("lista_animales").innerHTML = resultado;

//function imprimir() {
//    resultado = "";
//    animales.forEach(function (animal) {
//        resultado += "<li>" + animal.saludar() + "</li>";
//        document.getElementById("lista_animales").innerHTML = resultado;
//    });
//}

//En cada elemento de lista, a�adir un bot�n con texto "ruido"
//que mostrar� un alert con el ruido que hemos especificado en el animal.

let resultado = "";
animales.forEach(function (animal) {
    resultado += "<li>" + animal.nombre + "<input type=\"button\" value=\"Ruido\" onclick='ruido(\"" + animal.nombre + "\")' />" + "<input type=\"button\" value=\"Borrar\" onclick='borrar(\"" + animal.nombre + "\")' />" +"</li>"
})

document.getElementById("lista_animales").innerHTML = resultado;

function imprimir() {
    resultado = "";
    animales.forEach(function (animal) {
        resultado += "<li>" + animal.nombre + "<input type=\"button\" value=\"Ruido\" onclick='ruido(\"" + animal.nombre + "\")' />" + "<input type=\"button\" value=\"Borrar\" onclick='borrar(\"" + animal.nombre + "\")' />" + "</li>"
    document.getElementById("lista_animales").innerHTML = resultado;
    });
}

//con un FOREACH
function ruido(nombre) {
    animales.forEach(function (animal) {
        if (animal.nombre === nombre) {
            alert(animal.ruido);
        }
    });
}

////con un FOR
//function ruido(nombre) {
//    for (let i = 0; i < animales.length; i++) {
//        if (animales[i].nombre === nombre) {
//            alert(animales[i].ruido);
//        }
//    }
//}

//En cada elemento de la lista, a�adir otro bot�n m�s, esta vez con el texto "borrar" 
//que hace que el animal desaparezca de la lista.

//Con un FOREACH
function borrar(nombre) {
    animales.forEach(function (animal) {
        if (animal.nombre === nombre) {
            animales.splice(animales.indexOf(animal), 1);
        }
    });
    imprimir()
}

//Con un FOR
//function borrar(nombre) {
//    for (let i = 0; i < animales.length; i++) {
//        if (animales[i].nombre === nombre) {
//            animales.splice(i, 1);
//        }
//    }
//    imprimir();
//}