// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  // Obtener el valor del input (nombre del amigo)
  let nombre = document.getElementById("amigo").value;

  // chequemos si el campo está vacío
  if (nombre === "") {
    alert("Debe Ingresar un Nombre"); // Mostrar mensaje de error
    document.getElementById("amigo").focus(); // Enfocar el input
    return; // Salir de la función
  }

  // Agregar el nombre a la lista de amigos
  amigos.push(nombre);

  // Mostrar la lista actualizada
  mostrarAmigos();

  // Limpiamos el input y lo enfocamos de nuevo
  document.getElementById("amigo").value = "";
  document.getElementById("amigo").focus();
}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
  // Obtenemos el elemento donde se mostrará la lista
  let listaAmigos = document.getElementById("listaAmigos");

  // Limpiamos la lista antes de actualizarla
  listaAmigos.innerHTML = "";

  // Recorremos la lista de amigos y los agregamos
  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += "<li>" + amigos[i] + "</li>";
  }
}

// Función de sorteo de amigo secreto
function sortearAmigo() {
  // Verificar que haya al menos dos amigos en la lista
  if (amigos.length < 2) {
    alert("Debe ingresar al menos dos amigos"); // Mostrar mensaje de error
    return; // Salir de la función
  }

  // Generar un número aleatorio para seleccionar un amigo
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el amigo sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "<li>El amigo secreto es: <strong>" + amigoSorteado + "</strong></li>";

  // Limpiar la lista de amigos después del sorteo
  amigos = []; // Vaciar el array de amigos
  mostrarAmigos(); // Actualizar la lista en pantalla
}