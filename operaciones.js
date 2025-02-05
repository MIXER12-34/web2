function RealizarSuma() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const resultado = numero1 + numero2;
    document.getElementById("resultado").innerText = resultado;
}

function RealizarMultiplicacion() {
    const multiplicando1 = parseFloat(document.getElementById("multiplicando1").value);
    const multiplicando2 = parseFloat(document.getElementById("multiplicando2").value);
    const resultado = multiplicando1 * multiplicando2;
    document.getElementById("resultadoMultiplicacion").innerText = resultado;
}

function RealizarResta() {
    const minuendo = parseFloat(document.getElementById("minuendo").value);
    const sustraendo = parseFloat(document.getElementById("sustraendo").value);
    const resultado = minuendo - sustraendo;
    document.getElementById("resultadoResta").innerText = resultado;
}

function RealizarDivision() {
    const dividendo = parseFloat(document.getElementById("dividendo").value);
    const divisor = parseFloat(document.getElementById("divisor").value);
    if (divisor === 0) {
        document.getElementById("resultadoDivision").innerText = "Error: División entre cero";
    } else {
        const resultado = dividendo / divisor;
        document.getElementById("resultadoDivision").innerText = resultado;
    }
}
