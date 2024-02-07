/**var nome = 'Davi'
let  nome1 = 'Davi'

const PI = 3.14

console.log("seja bem vindo " + nome)
console.log(PI)
console.log(nome1)

let nota = 6


if (nota >= 7) {
    console.log('Aprovado')
} else if(nota >= 5){
    console.log('Recuperação')}
else {
        console.log('reprovado')}*/

function calcular(){
    let valor1 = Number(document.getElementById('valor1').value)
    let valor2 = Number(document.getElementById('valor2').value)
    const option = document.querySelector("input[name='option']:checked").value;

    if((valor1 >=0 && valor1 <= 100) && (valor2 >=0 && valor2 <= 100)){

        switch (option) {
            case "+":
                document.getElementById('resultado').innerHTML = valor1 + valor2
                break;
            case "-":
                document.getElementById('resultado').innerHTML = valor1 - valor2
                break;
            case "*":
                document.getElementById('resultado').innerHTML = valor1 * valor2
                break;
            case "/":
                if (valor1 % valor2 == 0){
                    document.getElementById('resultado').innerHTML = valor1 / valor2
                }else{document.getElementById('resultado').innerHTML = (valor1 / valor2).toFixed(2)}
                break;
     }

    }else{
    alert('Valor inválido')
    }
}
        