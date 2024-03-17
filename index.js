import dataInput from'readline-sync';

// console.log("Conversor de Milhas para Quilômetros: \n");

// let milhas = dataInput.questionInt("Digite a quantidade de milhas: ");

// let quilometros = milhas / 0.62137;

// console.log(`${milhas} milhas equivale a ${quilometros.toFixed(2)} km`);


// console.log("Conversor de Celsius para Kelvin: \n");

// let celsius = dataInput.questionInt("Digite a quantidade de celsius: "); // Aqui não vai precisar usar a função Number() porque utilizei o método questionInt

// let kelvin = celsius + 273.15;

// console.log(`${celsius} celsius equivale a ${kelvin.toFixed(2)} kelvin`);


console.log("Área do triângulo: \n");

let lado1 = dataInput.questionInt("Digite o lado 1 do triângulo: ");
let lado2 = dataInput.questionInt("Digite o lado 2 do triângulo: ");
let lado3 = dataInput.questionInt("Digite o lado 3 do triângulo: ");

let s = (lado1 + lado2 + lado3) / 2;

let area = Math.sqrt(s * (s - lado1) * (s - lado2) * (s - lado3));

console.log(`A área do triângulo é de ${area.toFixed(2)} m²`);
