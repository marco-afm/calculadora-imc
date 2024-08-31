document.getElementById('submitButton').addEventListener('click', function() {
    // Capturando os valores do formulário
    let nome = document.getElementById('nome').value;
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    // Calculando o IMC
    let calculoIMC = peso / Math.pow(altura, 2);

    // Arredondando o IMC para no máximo duas casas decimais 
    calculoIMC = calculoIMC.toFixed(2);

    // console.log(nome,', seu IMC é:', calculoIMC);

    // Revelando a section oculta
    document.getElementById('resultado').style.display = 'flex';

    // Revelando o resultado em HTML
    if (calculoIMC < '18,5') { // Abaixo do peso
        document.getElementById('resultado').innerHTML = `
        <p>${nome}, seu IMC é <strong>${calculoIMC}</strong></p>
        <p>Você está abaixo do peso ideal</p>
        <a class="botao" id="resetButton" href="./index.html">Ok</a>
        `;
    } else if (calculoIMC < '25') { // No peso ideal
        document.getElementById('resultado').innerHTML = `
        <p>${nome}, seu IMC é <strong>${calculoIMC}</strong></p>        
        <p>Você está com peso ideal</p>        
        <span>PARABÉNS!!!</span>
        <a class="botao" id="resetButton" href="./index.html">Ok</a>
        `;
    } else if (calculoIMC < '30') { // Acima do peso
        document.getElementById('resultado').innerHTML = `
        <p>${nome}, seu IMC é <strong>${calculoIMC}</strong></p>        
        <p>Você está acima do peso</p>        
        <a class="botao" id="resetButton" href="./index.html">Ok</a>
        `;   
    }
});
