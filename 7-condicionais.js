console.log("Trabalhando com condicionais");

const listaDeDestinos = new Array(
    'SÃO PAULO',
    'RIO DE JANEIRO',
    'CURITIBA'
);

console.log("destinos possiveis:");
//console.log(listaDeDestinos);

const idadeComprador = 18;

//condicionais
if(idadeComprador >= 18){//se a condição for verdadeira
    console.log("para maiores de idade")
    console.log(listaDeDestinos)
}else{ // se não
    console.log("para menores de idade")
    listaDeDestinos.splice(0,3)//removendo item [0]
    console.log(listaDeDestinos)
};


// operadores logicos
// console.log(idadeComprador > 18);//maior que 
// console.log(idadeComprador < 18);//menor que
// console.log(idadeComprador >= 18);// maior ou igual a 
// console.log(idadeComprador <= 18);// menor ou igual a 
// console.log(idadeComprador == 18);// igual a
