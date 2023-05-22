/* Tarea de programacion web, creada por Liam Marcos Jimenez Perez */

/* Para escuchar cuando carga el documento */
window.addEventListener('load', ()=> {  

/* Constantes y guardado de los elementos necesarios */    
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

/* Crear otra constante para convertir el HTMLCollection a Array */    
    const keypadButtonsArray = Array.from(keypadButtons);

/* Iteramos por nuestro nuevo Array de botones */
    keypadButtonsArray.forEach( (button) => {

/* A cada boton se le agrega un Listener */           
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        })
    })
});

function calculadora (button, display) {
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
    /* Tomar el string, resolverlo y guardarlo en el innerHTML del display */
    display.innerHTML = eval(display.innerHTML) 
}

function actualizar (display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = ''
    }
    display.innerHTML += button.innerHTML;

}

function borrar (display) {
    display.innerHTML = 0;
}

