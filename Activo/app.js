// Array donde se almacenarán los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista.
 * Captura el valor del input, lo valida y lo agrega al array.
 */
function agregarAmigo() {
    // Capturar el campo de entrada del nombre
    let listaNombres = document.getElementById('amigo');
    let amigo = listaNombres.value.trim(); // Elimina espacios al inicio y final

    // Validar si el input está vacío
    if (!amigo) {
        alert('No ha ingresado un nombre.');
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(amigo);

    // Limpiar el campo de entrada
    listaNombres.value = "";

    // Actualizar la lista en pantalla
    renderizarAmigos();
}

/**
 * Función para renderizar la lista de amigos en el HTML.
 * Recorre el array de amigos y los muestra en la interfaz.
 */
function renderizarAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = ""; // Limpiar la lista antes de actualizarla

    // Recorrer el array de amigos y agregar cada uno a la lista
    for (let i = 0; i < amigos.length; i++) {
        let listaDeNombres = document.createElement('li'); // Crear elemento <li>
        listaDeNombres.textContent = amigos[i]; // Asignar el nombre al <li>
        listaDeAmigos.appendChild(listaDeNombres); // Agregar el <li> al <ul>
    }
}

/**
 * Función para sortear un solo amigo de la lista.
 * Selecciona un nombre aleatorio y lo muestra en la interfaz.
 */
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debe haber al menos un amigo para realizar el sorteo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Seleccionar un índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre correspondiente

    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ""; // Limpiar resultado anterior

    let resultadoItem = document.createElement('li');
    resultadoItem.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultadoLista.appendChild(resultadoItem);
}