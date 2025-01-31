console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    'SÃO PAULO',
    'RIO DE JANEIRO',
    'CURITIBA'
);

console.log("destinos possiveis:");
//console.log(listaDeDestinos);

const idadeComprador = 17;
const estaAcompanhada = false;//boleando true or false
const temPassagemComprada = true;

//condicionais
//operadores condicionais encadeados
// if (idadeComprador >= 18 ) {//se a condição for verdadeira
//     console.log("para maiores de idade")
//     console.log(listaDeDestinos)
// } else { // se não
//     // a pessoa é menor de idade

//     if (estaAcompanhada) {
//         console.log("para menores de idade acompanhados")

//     } else {
//         console.log("para menores de idade sem responsavel")
//         listaDeDestinos.splice(0, 3)//removendo item [0]
//     }

// };
// console.log(listaDeDestinos)



//operadores logicos encadeados
if (idadeComprador >= 18 || estaAcompanhada) { 
    console.log("para maiores de idade, ou menores de idade acompanhados")
} else { // se não
    // a pessoa é menor de idade
    console.log("para menores de idade sem responsavel")
    listaDeDestinos.splice(0, 3)//removendo item [0]

};
console.log(listaDeDestinos)

console.log("embarque: \n \n")

// || == ou,or
// && == and, e

if (idadeComprador >= 18 || estaAcompanhada && temPassagemComprada ){
    console.log("Boa viagem")
}else{
    console.log("sem os requisitos para viajar")
};






// operadores logicos
// console.log(idadeComprador > 18);//maior que
// console.log(idadeComprador < 18);//menor que
// console.log(idadeComprador >= 18);// maior ou igual a
// console.log(idadeComprador <= 18);// menor ou igual a
// console.log(idadeComprador == 18);// igual a
