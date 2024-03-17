import input from 'readline-sync'

console.log("\nAplicação de Juros:\n");

let valorDevido = input.questionFloat("\nInforme o valor devido:")

if (valorDevido <= 0) {
    console.log("\nVocê não tem saldo devedor\n");
} else {
    let diasDeAtraso = input.questionInt("\nInforme quantos dias se passaram desde o vencimento do boleto:")

    if (diasDeAtraso <= 0) {
        console.log("Você está em dia!");
    } else if (diasDeAtraso <= 15) {
        let juros = (1 + (diasDeAtraso / 30)).toFixed(2)
        let resultado = valorDevido * juros;
    
        console.log(`\nValor original da dívida: R$${valorDevido.toFixed(2)}`);
        console.log(`\nDias de atraso: ${diasDeAtraso}`);
        console.log(`\nTaxa de juros: ${juros}% ao mês\n`)
        
        
        console.log(`O valor total com o juros é de R$${resultado.toFixed(2)}\n`)

    } else if (diasDeAtraso >=16) {
        let juros = (1 + (diasDeAtraso / 30) + 0.5).toFixed(2)
        let resultado = valorDevido * juros;

        console.log(`\nValor original da dívida: R$${valorDevido.toFixed(2)}`);
        console.log(`\nDias de atraso: ${diasDeAtraso}`);
        console.log(`\nTaxa de juros: ${juros}% ao mês\n`)

        console.log(`O valor total com o juros é de R$${resultado.toFixed(2)}\n`)
    }
        
       
}





