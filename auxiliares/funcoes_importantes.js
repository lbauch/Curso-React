/*
IMPORTANTE
Texto em comentário de bloco
comentário em várias linhas
*/

// Comentário de linha

// Criondo variáveis 
var x = 10;
var y = 35;

// String pode estar entre '' ou ""
var nome = 'Lucas';
var sobrenome = "Bau";

// Concatenando variáveis
// alert manda uma caixa de alerta no navegador, exibindo a mensagem do seu interior
alert("O valor de x é " + x);
var nome_completo = nome + " " + sobrenome;


// Fazer operações
var soma = y + x;
var sub = y - x;
var mul = y * x;
var div = y / x;

// console.log - salva no console
console.log(soma);

// prompt solicita digitação do usuário
prompt('Qual sua idade?')

// Atribuindo a uma variável:
var idade = prompt('Qual sua idade?')

// document - refere-se a toda a parte da página que pode ser alterada pelo html
// window - refere-se a toda a janela aberta
// document.write - entre aspas, deve estar o código HTML
document.write("<h1>Aprendendo JS</h1>");
document.write('</br>');
document.write("<img src='https://google.com/google.jpg'>");
document.write("<strong> Aprendendo JS </strong>")


