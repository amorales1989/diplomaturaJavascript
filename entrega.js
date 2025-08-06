

// let nombre = ''

// document.addEventListener('DOMContentLoaded', function() {
//     const btnIniciar = document.getElementById('btnIniciar');
//     btnIniciar.addEventListener('click', function() {
//          nombre = iniciarPrompt();
//          console.log("Nombre guardado:", nombre);
         
//          if (nombre) {
//              solicitarNumero();
//          }
//     });
// });

// function iniciarPrompt() {
//     nombre = prompt("¿Cuál es tu nombre?");
//     if (nombre !== null && nombre.trim() !== "") {
//         return nombre
//     } else {
//         alert("No ingresaste un nombre válido.");
//         return null;
//     }
// }

// function solicitarNumero() {
//     const numero = prompt(`Hola ${nombre}!!, ingresa un número del 1 al 10 para recibir tu mensaje del día:`);
    
//     if (numero !== null && numero.trim() !== "") {
//         const numeroInt = parseInt(numero);
        
//         if (numeroInt >= 1 && numeroInt <= 10) {
//             const mensaje = obtenerMensaje(numeroInt);
//             if (mensaje) {
//                 alert(`¡${nombre}! Tu mensaje es:\n\n"${mensaje.mensaje}"\n\nAutor: ${mensaje.autor}`);
//             }
//         } else {
//             alert("Por favor, ingresa un número válido del 1 al 10.");
//             mostrarNumerosDisponibles()
//             solicitarNumero();
//         }
//     } else {
//         alert("No ingresaste un número válido.");
//     }
// }



// ENTREGA N°2


let nombre = '';
let historialMensajes = [];

document.addEventListener('DOMContentLoaded', function() {
    const btnIniciar = document.getElementById('btnIniciar');
    btnIniciar.addEventListener('click', function() {
         nombre = iniciarPrompt();
         console.log("Nombre guardado:", nombre);
         
         if (nombre) {
             solicitarNumero();
         }
    });
});

function iniciarPrompt() {
    nombre = prompt("¿Cuál es tu nombre?");
    if (nombre !== null && nombre.trim() !== "") {
        return nombre;
    } else {
        alert("No ingresaste un nombre válido.");
        return null;
    }
}

function solicitarNumero() {
    const numero = prompt(`Hola ${nombre}!! Ingresa un número del 1 al 10 para recibir tu mensaje del día (o escribe 'random' para uno aleatorio):`);
    
    if (numero !== null && numero.trim() !== "") {
        let mensaje;
        
        if (numero.toLowerCase() === 'random') {
            mensaje = obtenerMensajeAleatorio();
        } else {
            const numeroInt = parseInt(numero);
            
            if (numeroInt >= 1 && numeroInt <= 10) {
                mensaje = obtenerMensaje(numeroInt);
            } else {
                alert("Por favor, ingresa un número válido del 1 al 10 o 'random'.");
                mostrarNumerosDisponibles();
                solicitarNumero();
                return;
            }
        }
        
        if (mensaje) {
            historialMensajes.push(mensaje);
            
            alert(`¡${nombre}! Tu mensaje es:\n\n"${mensaje.mensaje}"\n\nAutor: ${mensaje.autor}`);
            
            console.log(`Mensajes vistos: ${historialMensajes.length}`);
            
            if (confirm("¿Quieres ver otro mensaje?")) {
                solicitarNumero();
            }
        }
    } else {
        alert("No ingresaste un valor válido.");
    }
}