// Biblioteca de mensajes de superación
const bibliotecaMensajes = {
    1: {
        numero: 1,
        mensaje: "Cada día es una nueva oportunidad para ser mejor que ayer. ¡Tú puedes lograrlo!",
        autor: "Anónimo"
    },
    2: {
        numero: 2,
        mensaje: "Los obstáculos son las escaleras que te llevan a tus sueños. ¡Sigue adelante!",
        autor: "Desconocido"
    },
    3: {
        numero: 3,
        mensaje: "Tu actitud determina tu altitud. Mantén la mente positiva y verás resultados increíbles.",
        autor: "Zig Ziglar"
    },
    4: {
        numero: 4,
        mensaje: "El éxito no es final, el fracaso no es fatal: lo que cuenta es el coraje para continuar.",
        autor: "Winston Churchill"
    },
    5: {
        numero: 5,
        mensaje: "La diferencia entre lo imposible y lo posible está en la determinación.",
        autor: "Tommy Lasorda"
    },
    6: {
        numero: 6,
        mensaje: "No te rindas, las mejores cosas de la vida requieren tiempo y esfuerzo.",
        autor: "Desconocido"
    },
    7: {
        numero: 7,
        mensaje: "Cada logro comienza con la decisión de intentarlo. ¡Tú ya diste el primer paso!",
        autor: "Anónimo"
    },
    8: {
        numero: 8,
        mensaje: "Tu potencial es ilimitado. Solo necesitas creer en ti mismo y trabajar duro.",
        autor: "Desconocido"
    },
    9: {
        numero: 9,
        mensaje: "Los campeones no se hacen en el gimnasio. Se hacen de algo que tienen en su interior: un deseo, un sueño, una visión.",
        autor: "Muhammad Ali"
    },
    10: {
        numero: 10,
        mensaje: "El único límite para tus logros es la altura de tus sueños y tu disposición para trabajar por ellos.",
        autor: "Michelle Obama"
    }
};

function obtenerMensaje(numero) {
    return bibliotecaMensajes[numero] || null;
}

function mostrarNumerosDisponibles() {
    console.log("Números disponibles:");
    for (let i = 1; i <= 10; i++) {
        console.log(`Número ${i}`);
    }
} 