let numeroSecreto = generarNumero();

function generarNumero() {
    return Math.floor(Math.random() * 100) + 1;
}

function verificarNumero() {
    let input = document.getElementById("inputNumero");
    let mensaje = document.getElementById("mensaje");

    let intento = Number(input.value);

    // Validación
    if (!intento || intento < 1 || intento > 100) {
        mensaje.textContent = "Ingresa un número entre 1 y 100";
        return;
    }

    if (intento > numeroSecreto) {
        mensaje.textContent = "El número es menor";
    } else if (intento < numeroSecreto) {
        mensaje.textContent = "El número es mayor";
    } else {
        mensaje.textContent = "¡ADIVINASTE! 🎉";
    }
}

function reiniciarJuego() {
    numeroSecreto = generarNumero();
    document.getElementById("mensaje").textContent = "";
    document.getElementById("inputNumero").value = "";
}
