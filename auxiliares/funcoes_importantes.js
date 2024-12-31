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

// Criando functions
function entrar(){
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome:');

    // if - ou, and, true
    if(texto == '' || (texto == null && true)){
        alert('Digite seu nome novamente')
        area.innerHTML = 'Bem vindo...';
    }
    else{
        area.innerHTML = 'Bem vindo' + texto;
    }
}

// Function com parâmetro:
function entrar2(nome){
    var area = document.getElementById('area');
    area.innerHTML = 'Bem vindo' + nome;
}

// ------- ARRAYS
var lista_nomes = ['nome1', 'nome2', 'nome3', 16];

lista_nomes.length;
// Pegar o elemento de segunda posição
lista_nomes.lista_nomes[1];
// IndexOf retorna o índice do elemento passado como parâmetro
// Caso não exista no array algum elemento igual ao parâmetro passado, retorna -1. 
lista_nomes.indexOf('nome2');
// join - concatena os elementos com um caracter passado como parâmetro
lista_nomes.join(',');
// .pop() retira e retorna o último elemento do array
lista_nomes.pop();
// .shift() retira e retorna o primeiro elemento do array
lista_nomes.shift();
// Alterar algum valor
lista_nomes = ['nome1', 'nome2', 'nome3', 'nome4'];
nome = lista_nomes.indexOf('nome3');
lista_nomes[nome] = 'Algum nome';
// adicionar elemento passado como parâmetro
lista_nomes.push('nome10');
// Verificar elemento da lista:
if(lista_nomes.indexOf('nome10') > 1){
    alert('Este elemento está na lista');
}

// ---- LOOPS

// while
x = 0

while(x < 10){
    document.write('<br> O valor de x é ' + x);
    x++;
}

document.write('<br><br>');

// for
for(a = 0; a < x; a++){
    document.write('<br> O valor de a é ' + a);
}

// for iterator
lista = ['a', 'b', 'c', 'd'];
// imprime o índice
for(let letra in lista){
    console.log(letra);
}
// imprime o valor correspondente ao índice
for(let letra in lista){
    console.log(lista[letra]);
}

// switch
switch(x){
    case 0:
        alert('x vale 0');
        break;
    case 1:
        alert('x vale 1');
        break;
    case 2:
        alert('x vale 2');
        break;
    default:
        alert('x é maior que 2, menor que 0 ou não é número');
}

// --- intervalos de tempo

// setInterval() - repete a função passada no primeiro parâmetro conforme o tempo do segundo parâmetro
// recebe 2 parâmetros - o primeiro é a função que será executada. O segundo é o intervalo em ms
function acao(){
    document.write('Alô<br>');
}
// repete infinitamente a acao de 1 em 1 segundo
// setInterval(acao, 1000);
// para pausar a execução do setInterval, é necessário atribuir o comando a uma variável
var tempo = setInterval(acao, 1000);
//pausar a execução:
clearInterval(tempo);

// setTimeout() - executa a ação do 1º param após o tempo definido no 2° param
setTimeout(acao, 3000);

// ------ WebStorage

// Salvar variável local
// localStorage.setItem() - recebe uma tupla chave, valor e salva como "cookie"
localStorage.setItem('nome', 'Lucas');
// Outra forma: - cria caso não exista ou reescreve caso já exista
localStorage.nome = 'Matheus';

//obter valor armazenado
// localStorage.getItem() - recebe como parâmetro o nome da chave e retorna o valor correspondente
localStorage.getItem('nome');
// Outra forma: - retorno o valor armazenado na variável
localStorage.nome;

// remover valor de variável local pelo nome da chave passado como parâmetro
localStorage.removeItem('nome');


// Comparação de tipos - TYPEOF
if (typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt('Digite seu nome:');
}
nome = localStorage.nome;
document.getElementById('nome').innerHTML = nome;

// Também é possível salvar uma lista no localStorage ou sessionStorage:
localStorage.lista = ['valor1', 'valor2', 3, 5.4, nome];

/*
sessionStorage - utilizado da mesma forma que o localStorage, porém é automaticamente removido
ao fechar, atualizar ou reiniciar o navegador
*/
sessionStorage.lista = ['valor1', 'valor2', 3, 5.4, nome];


// ------ VARIÁVEIS

// utilizando var, let ou const

// VAR - ao ser criado dentro de if ou loop, pode ser utilizado fora do mesmo:
if (true) {
    var teste = 3;
}
alert(teste);

// LET - ao ser criado dentro de if ou loop, não pode ser utilizado fora do mesmo:
// Somente pode ser utilizado dentro do escopo ao qual pertence
// Caso tenha sido criado no main do código, pode ser utilizado como o var
if (true) {
    let valor_let = 3;
}
alert(valor_let);

// CONST - variável com valor imutável
const valor_const = 5.7;
// ao tentar executar o código abaixo, resulta em erro
valor_const = 6;

// Concatenar strings com valores: - utiliza-se entre crases
alert(`o valor escrito é ${valor_const}`);

// -----DESCONTRUINDO UMA VÁRIÁVEL OU LISTA:
const pessoa = {
    nome : 'Lucas',
    sobrenome : 'Bau',
    idade: 30,
    cargo: 'profissional'
};

// Cria uma variável com o nome informado e atribui a ela o valor da respectiva chave do dicionário passado
let {nome} = pessoa;
let {sobrenome} = pessoa;
let {idade, cargo} = pessoa;

// Cria uma variável com o nome passado após os : e atribui a ela o valor da chave antes dos :
// Neste caso, seria o mesmo que: profissao = cargo, considerando que cargo foi criado na linha acima.
let {cargo:profissao} = pessoa;

/*
Ao desconstruir uma variável, cria-se uma nova. Então, ao alterar o valor da nova variável,
a antiga variável não é afetada.
por exemplo:
sobrenome = 'Algum Sobrenome' ou 
profissao = 'Alguma Profissão'
Ao fazer isso, a variável pessoa se mantém com os dados originais
*/

// Desconstruindo a lsta:
let nomes = ['nome1', 'nome2', 'nome3'];

// fazendo a desconstrução:
// cria a variável segundo_nome e atribui a ela o valor de nomes[1]
let {1:segundo_nome} = nomes;
// pegando mais de um valor simultaneamente:
let {2:terceiro_nome, 0:primeiro_nome} = nomes;
// outra forma:
let [prim_nome, seg_nome, terc_nome] = nomes
// não precisa conter todos os elementos, mas, as variáveis recebem sempre na ordem, sem pular elementos
// neste caso, atribui às duas variáveis os 2 primeiros valores
let [nome_1, nome_2] = nomes