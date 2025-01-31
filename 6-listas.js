console.log(`trabalhando com listas`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio De Janeiro`;



const listaDeDestinos = new Array(  //declarando uma lista nova
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`,
);


const lista2 = new Array(

);


console.log(lista2)
listaDeDestinos.push(`Curitiba`) //adicionando mais itens a lista

console.log("Destinos possiveis:");
console.log(listaDeDestinos) //exibe a lista inteira, inclusive o objeto


listaDeDestinos.splice(1,1)// o primeiro parametro é o start ou seja nesse caso ele vai apagar o item de posicao 1 , o segundo parametro é a quantidade de itens que voce quer remover deste ponto em diante
console.log(listaDeDestinos)


//acessando a lista
console.log(listaDeDestinos[1]) //exibindo somente o index 01 dessa lista

//contando itens da lista
console.log(listaDeDestinos.length) //exibe a quantidade de itens na lista