// 1. Evento del teclado: Detectar la tecla "Enter" en el formulario
document.getElementById('formulario').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevenir que el formulario se envíe automáticamente
        document.getElementById('mensaje').textContent = "Formulario enviado con la tecla Enter.";
    }
});

// 2. Eventos del ratón: Cambiar color de fondo y texto al hacer clic en los botones

// Cambiar color de fondo al hacer clic en el botón
document.getElementById('cambiarColorFondo').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue'; // Cambia el color de fondo
});

// Cambiar estilo del texto al hacer clic en otro botón
document.getElementById('cambiarTexto').addEventListener('click', function() {
    document.body.style.fontSize = '20px';
    document.body.style.color = 'green';
});

// Eventos mouseover y mouseout para el botón "Cambiar color de fondo"
document.getElementById('cambiarColorFondo').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow'; // Cambia el color al pasar el ratón
});

document.getElementById('cambiarColorFondo').addEventListener('mouseout', function() {
    this.style.backgroundColor = ''; // Vuelve al color original
});

// Evento ondblclick: Doble clic en el área de la lista
document.getElementById('lista').addEventListener('dblclick', function() {
    alert('¡Has hecho doble clic en la lista!');
});

// 3. Validaciones en el formulario (email y nombre)
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var email = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;

    // Validación de email
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('mensaje').textContent = "Por favor, ingresa un correo electrónico válido.";
        return;
    }

    // Verificar que el nombre no esté vacío
    if (nombre.trim() === "") {
        document.getElementById('mensaje').textContent = "El campo de nombre no puede estar vacío.";
        return;
    }

    document.getElementById('mensaje').textContent = "Formulario enviado con éxito.";
});

// 4. Cambios de estilos dinámicos (cambiar color de fondo con un botón)
document.getElementById('cambiarColorFondo').addEventListener('click', function() {
    var colores = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow'];
    var randomColor = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = randomColor;
});

// Cambiar tamaño y color del texto
document.getElementById('cambiarTexto').addEventListener('click', function() {
    document.body.style.fontSize = '20px';
    document.body.style.color = 'green';
});

// 5. Uso de estructuras repetitivas y condicionales: Crear lista dinámica de elementos
var lista = document.getElementById('lista');
for (var i = 0; i < 5; i++) {
    var li = document.createElement('li');
    li.textContent = 'Elemento ' + (i + 1);
    lista.appendChild(li);
}

// Cambiar estilos de los elementos de la lista al hacer clic
var items = lista.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        this.style.color = 'red'; // Cambia el color del texto al hacer clic en el elemento
    });
}

// 2.1. Evento onclick: Cambiar el color del fondo de la página al hacer clic en el botón
document.getElementById('cambiarColorFondo').addEventListener('click', function() {
    var colores = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow'];
    var randomColor = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = randomColor;
});

// 2.2. Evento onmouseover y onmouseout para cambiar el fondo de un botón
document.getElementById('cambiarColorFondo').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow'; // Cambia el color al pasar el ratón
});

document.getElementById('cambiarColorFondo').addEventListener('mouseout', function() {
    this.style.backgroundColor = ''; // Vuelve al color original
});

// 2.3. Evento ondblclick: Activar evento con doble clic en el área de lista
document.getElementById('lista').addEventListener('dblclick', function() {
    alert('¡Has hecho doble clic en la lista!');
});

// 3. Validaciones en el formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    var email = document.getElementById('email').value;
    var nombre = document.getElementById('nombre').value;

    // Validación del email (correo electrónico debe tener formato válido)
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('mensaje').textContent = "Por favor, ingresa un correo electrónico válido.";
        return;
    }

    // Validación del nombre (campo no puede estar vacío)
    if (nombre.trim() === "") {
        document.getElementById('mensaje').textContent = "El campo de nombre no puede estar vacío.";
        return;
    }

    // Si todo es correcto, muestra mensaje de éxito
    document.getElementById('mensaje').textContent = "Formulario enviado con éxito.";
});
<script src="js/eventos.js"></script>

// 4.1. Cambiar dinámicamente el color de fondo con un botón
document.getElementById('cambiarColorFondo').addEventListener('click', function() {
    var colores = ['lightblue', 'lightgreen', 'lightpink', 'lightyellow'];
    var randomColor = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = randomColor;
});

// 4.2. Cambiar tamaño y color del texto al hacer clic en un botón
document.getElementById('cambiarTexto').addEventListener('click', function() {
    document.body.style.fontSize = '20px';
    document.body.style.color = 'green';
});

// 5.1. Crear dinámicamente una lista de elementos en la página
var lista = document.getElementById('lista');
for (var i = 0; i < 5; i++) {
    var li = document.createElement('li');
    li.textContent = 'Elemento ' + (i + 1);
    lista.appendChild(li);
}

// 5.2. Cambiar el estilo de los elementos de la lista al hacer clic
var items = lista.getElementsByTagName('li');
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        this.style.color = 'red'; // Cambia el color del texto al hacer clic en el elemento
    });
}
