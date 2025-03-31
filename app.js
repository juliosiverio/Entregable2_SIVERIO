// Cargar citas desde localStorage
const listaCitas = JSON.parse(localStorage.getItem('citas')) || [];

// Función para mostrar las citas en el HTML
function mostrarCitas() {
    const listaHTML = document.getElementById('listaCitas');
    listaHTML.innerHTML = ''; // Limpiar lista antes de agregar nuevos elementos
    listaCitas.forEach(cita => {
        const li = document.createElement('li');
        li.textContent = `${cita.nombre} - ${cita.fecha}`;
        listaHTML.appendChild(li);
    });
}

// Guardar citas en localStorage
function guardarCitas() {
    localStorage.setItem('citas', JSON.stringify(listaCitas));
}

// Evento para agregar una nueva cita
document.getElementById('formCita').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;

    // Verificar que los campos no estén vacíos
    if (nombre === '' || fecha === '') {
        alert('Por favor, ingrese todos los datos');
        return;
    }

    // Agregar nueva cita
    const nuevaCita = { nombre, fecha };
    listaCitas.push(nuevaCita);

    // Guardar citas en localStorage y mostrar
    guardarCitas();
    mostrarCitas();

    // Limpiar formulario
    document.getElementById('formCita').reset();
});

// Mostrar citas al cargar la página
mostrarCitas();

