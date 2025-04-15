document.addEventListener('DOMContentLoaded', function () {
    const botaoCalcular = document.getElementById("calculo");
    const campoTotal = document.getElementById("value");
    const campoPerson = document.getElementById("person");
    const campoPorcent = document.getElementById("porcent");
    const valorGorjeta = document.getElementById("palavra");

    botaoCalcular.addEventListener('click', () => {
        const totalConta = parseFloat(campoTotal.value);
        const numPessoas = parseInt(campoPerson.value);
        const porcentagem = parseFloat(campoPorcent.value);

        if (isNaN(totalConta) || isNaN(numPessoas) || totalConta <= 0 || numPessoas <= 0) {
            alert('Valores válidos!');
            return;
        }

        const gorjetaTotal = totalConta * porcentagem;
        const gorjetaPorPessoa = gorjetaTotal / numPessoas;

        valorGorjeta.innerText = `R$ ${gorjetaPorPessoa.toFixed(2)}`;
    });
});