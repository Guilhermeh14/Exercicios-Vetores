/*1.	Crie um algoritmo para ler 5 números inteiros, armazene-os em um vetor, 
e mostre a quantidade de números pares e ímpares deste vetor*/

var n1 = parseInt(  prompt("Digite o primeiro numero ")    );
var n2 = parseInt(  prompt("Digite o segundo numero ")    );
var n3 = parseInt(  prompt("Digite o terceiro numero ")    );
var n4 = parseInt(  prompt("Digite o quarto numero ")    );
var n5 = parseInt(  prompt("Digite o quinto numero ")    );

var v = [n1, n2, n3, n4, n5];

var par = 0;
var impar = 0;

for (var i = 0; i < v.length; i++) {
    if(v[i] %2 == 0){
        par++
    } else {
        impar++
    }
}
console.log(par + " Numero(s) par");
console.log(impar + " Numero(s) impar");

/*2.	Faça um algoritmo que leia 6 números e armazene em um vetor. Depois, some os 3
primeiros elementos deste vetor.*/

var n1 = parseInt(  prompt("Digite o primeiro numero ")    );
var n2 = parseInt(  prompt("Digite o segundo numero ")    );
var n3 = parseInt(  prompt("Digite o terceiro numero ")    );
var n4 = parseInt(  prompt("Digite o quarto numero ")    );
var n5 = parseInt(  prompt("Digite o quinto numero ")    );
var n6 = parseInt(  prompt("Digite o sexto numero ")    );

var v = [n1, n2, n3, n4, n5, n6]

var soma = n1+n2+n3;
console.log("a soma dos tres primeiros numeros é " + soma);


/*3.	Crie um programa que solicite a entrada de 5 números pelo usuário, armazenando-os em um vetor,
 e então monte outro vetor com os valores do primeiro multiplicados por 2, e exiba os valores dos dois vetores na tela.*/

var n1 = parseInt(prompt("Digite o primeiro numero "));
var n2 = parseInt(prompt("Digite o segundo numero "));
var n3 = parseInt(prompt("Digite o terceiro numero "));
var n4 = parseInt(prompt("Digite o quarto numero "));
var n5 = parseInt(prompt("Digite o quinto numero "));

var v = [n1, n2, n3, n4, n5]
var n1x = n1 *2
var n2x = n2 *2
var n3x = n3 *2
var n4x = n4 *2
var n5x = n5 *2

console.log(n1,n2,n3,n4,n5);
console.log(n1x,n2x,n3x,n4x,n5x);


/*4.	Faça um algoritmo que receba 5 números inteiros,  
armazene-os em um vetor, em seguida, descubra e exiba
 o maior número.*/

 var n1 = parseInt(  prompt("Digite o primeiro numero ")    );
 var n2 = parseInt(  prompt("Digite o segundo numero ")    );
 var n3 = parseInt(  prompt("Digite o terceiro numero ")    );
 var n4 = parseInt(  prompt("Digite o quarto numero ")    );
 var n5 = parseInt(  prompt("Digite o quinto numero ")    );

 
var v = [n1, n2, n3, n4, n5];
var maior = 0;
debugger;
for (var i = 0; i < v.length; i++) {
   if ( v[i] > maior ) {
      maior = v[i];
   }
} console.log(maior);



/*5 exercício: Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

• O menor valor de faturamento ocorrido em um dia do mês;

• O maior valor de faturamento ocorrido em um dia do mês;

• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/

var dia1 = parseFloat(  prompt("digite o faturamento do dia 1"));
var dia2 = parseFloat(  prompt("digite o faturamento do dia 2"));
var dia3 = parseFloat(  prompt("digite o faturamento do dia 3"));
var dia4 = parseFloat(  prompt("digite o faturamento do dia 4"));
var dia5 = parseFloat(  prompt("digite o faturamento do dia 5"));

var media = (dia1 + dia2 + dia3 + dia4 + dia5) / 5
var diamaior = 0;

var vfaturamento = [dia1,dia2,dia3,dia4,dia5];
var min = Math.min(...vfaturamento);
var max = Math.max(...vfaturamento);

for(var i =0; i < vfaturamento.length; i++) {
    if(media > vfaturamento[i]) {
        diamaior++
    }
};

console.log("valor maximo no mês: " + max);
console.log("valor minimo no mês: " + min);
console.log("a media no mes é de : " + media);
console.log("dias de faturamento maior que a média: " + diamaior);

