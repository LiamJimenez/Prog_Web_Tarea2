/* Tarea de programacion web, creada por Liam Marcos Jimenez Perez */

window.addEventListener('load', () => {
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');
    const keypadButtonsArray = Array.from(keypadButtons);

    keypadButtonsArray.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.innerHTML === 'R') {
                mostrarUltimaOperacion(display);
            } else {
                calculadora(button, display);
            }
        });
    });
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display, button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML);
    guardarOperacion(display.innerHTML); // Guardar la operación en el localStorage
}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    display.innerHTML = 0;
}

function guardarOperacion(operacion) {
    // Guardar la nueva operación como la última en el localStorage
    localStorage.setItem('ultimaOperacion', operacion);
}

function mostrarUltimaOperacion(display) {
    // Obtener la última operación guardada del localStorage
    const ultimaOperacionGuardada = localStorage.getItem('ultimaOperacion');

    // Mostrar la última operación en el display y borrar el contenido actual
    if (ultimaOperacionGuardada) {
        display.innerHTML = ultimaOperacionGuardada;
    } else {
        display.innerHTML = 'No hay operación guardada.';
    }
}

