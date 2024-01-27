let alturaInput = document.querySelector('#alturaInput');
let pesoInput = document.querySelector('#pesoInput');
let responseInput = document.querySelector('.response');
let buttonRed = document.querySelector('.red');


function calcImc(){
    let altura = parseFloat(alturaInput.value);
    let peso = parseFloat(pesoInput.value);

    let result = (peso / (Math.pow(altura,2))).toFixed(2)
    const IMC = parseFloat(result);

    return IMC;
}

function responseStatus(event) {
    event.preventDefault();

    let result = calcImc();

    let describe = "";

    if (result < 18.5) {
        describe = "Abaixo do peso";
    } else if (result >= 18.5 && result <= 24.9) {
        describe = "Peso normal";
    } else if (result >= 25 && result <= 29.9) {
        describe = "Sobrepeso";
    } else if (result >= 30 && result <= 34.9) {
        describe = "Obesidade Grau I";
    } else if (result >= 35 && result <= 39.9) {
        describe = "Obesidade Grau II";
    } else if (result >= 40) {
        describe = "Obesidade Grau III";
    }

    
    let textResult = document.createElement('p');
    textResult.textContent = describe;
    responseInput.appendChild(textResult);
    
   
}



buttonRed.addEventListener('click', responseStatus);





