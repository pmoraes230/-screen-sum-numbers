let soma1 = document.getElementById("number1");
let soma2 = document.getElementById("number2");
const btnCalcular = document.getElementById("btn_calcular");
const resultadoTela = document.getElementById("resultado");

btnCalcular.addEventListener("click", function() {
    let valor1 = parseInt(soma1.value);
    let valor2 = parseInt(soma2.value);

    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoTela.innerHTML = "Por favor, insira número válidos nos dois campos."
        return;
    }

    const resultado = valor1 + valor2;
    resultadoTela.innerText = `O resultado da soma de ${valor1} + ${valor2} é: ${resultado}`;
    resultadoTela.style.fontWeight = "bold";
    resultadoTela.style.fontSize = "20px";

    soma1.value = "";
    soma2.value = "";
})