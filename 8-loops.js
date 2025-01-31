console.log("Trabalhando com loops");

const listaDeDestinos = new Array(
    'SÃO PAULO',
    'RIO DE JANEIRO',
    'CURITIBA'
);

//console.log(listaDeDestinos);

const idadeComprador = 18;
const estaAcompanhada = false;//boleando true or false
let temPassagemComprada = false;//variavel
const destino = 'SÃO PAULO';

const podeComprar = idadeComprador >= 18 || estaAcompanhada;//retorna um verdadeiro ou falso para a constante podeComprar


// let contador = 0;//posicao do item que quero verificar
// while (contador < listaDeDestinos.length) {
//     console.log(listaDeDestinos[contador]);//acessando os itens da lista
//     contador += 1;//incrementando o contador

// };
let contador = 0;//posicao do item que quero verificar
let destinoExiste = false;
while (contador < listaDeDestinos.length) {
    if (listaDeDestinos[contador] == destino){//acessando os itens da lista
        //console.log("o destino esta disponivel na lista");
        destinoExiste = true;
        break;
    }else{
        if(contador == listaDeDestinos.length - 1){// -1 por conta do index partir do zero, e ja o lenght nao considera esse zero ele parte do 1
            //console.log("destino nao encontrado na lista");
            break;
        }
    };
    contador += 1;//incrementando o contador

};

console.log("destino existe:",destinoExiste);