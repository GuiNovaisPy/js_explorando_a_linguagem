console.log("Trabalhando com atribuicao de variaveis");


let idade = 20;//let é para variaveis, podem ser modificadas
const nome = "Guilherme";//constantes, nao podem ser mudadas
const sobrenome = "Novais";//constantes, nao podem ser mudadas

//console.log(nome, sobrenome) //concatena, e adiciona o espaco por conta da virgula
//console.log(nome + " " + sobrenome) //concatena 
console.log(`meu nome é ${nome} ${sobrenome}, minha idade ${idade}`); // utilizando crase para formatar str com variavel 


idade = 21; //pelo fato da variavel ja ter sido declarada, nao precisamos setar o let novamente, somente o valor

console.log(`meu nome é ${nome} ${sobrenome}, minha idade apos a mudanca ${idade}`);


