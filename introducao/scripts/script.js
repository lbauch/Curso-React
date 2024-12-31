// função entrar
function entrar1(){
    
    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome:');

    // if - ou, and, true
    if(texto == '' || (texto == null && true)){
        alert('Digite seu nome novamente');
        area.innerHTML = 'Bem vindo...';
    }
    else{
        area.innerHTML = 'Bem vindo' + texto;
    }

}


function entrar2(nome){
    var area = document.getElementById('area');
    area.innerHTML = 'Bem vindo' + nome;
}
var lista_nomes = ['nome1', 'nome2', 'nome3'];
alert(lista_nomes.length);

alert(lista_nomes[1]);

lista_nomes = ['nome1', 'nome2', 'nome3', 'nome4'];
nome = lista_nomes.indexOf('nome3');
lista_nomes[nome] = 'Algum nome';
alert(lista_nomes.join(','));