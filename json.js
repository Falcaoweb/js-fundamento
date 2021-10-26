// #region criando objetos json

// todo objeto json ele é representado por chave =. valor
// ou seja, toda chaev tem acesso e um valor que pode ser qualquer coisa.
// desde um número, texto, função ou até memso outro objeto

//declarando um objeto json vazio.
const usuario = {};

//declarando um ojeto json com dados.
const usuario2 = {
  // aqui temos uma chave 'nome' que da acesso ao valor 'felipe'
  nome: "felipe", // utiliza virgula para separar uma chave  e valor da outra

  // aqui temos uma chave 'idade' que da acesso ao valor '25".
  idade: 25,
};

// #endregion

// #region criando novas chaves e valores no objeto json já criado

//exibeindo nosso objeto usuario vazio.
console.log("usuario (criada): ", usuario);

// inserindo novas chaves => valores em nosso json.
//acesamos uma chave dentro do nosso objeto e atribuimos a ela um valor.
// se a chave nao existe ela será criada.
// neste caso estamos acessando a chave 'novaChave'
//que nao existe e estamos coloando novo valor 'valor da chave'.
usuario.novaChave = "valor da chave";

// aqui também estamos acessando uma chave que não existe em nosso objeto usuario
//chave 'nome' vai receber o valor 'novo nome' e agora ela passa a existir
usuario.nome = "novo nome";

// exibindo nosso objeto usuario após criar os campos
console.log("usuario (alterada): ", usuario);
// #endregion

//#region alterando valores dentro do nosso objeto json já criado.

//exibindo o objeto json 'usuario2' antes de qualquer alteração
console.log("usuario2 (criada): ", usuario2);

// vamos acessar o valor atravéz de uma chave deentro do nosso objeto usuario
//neste caso vamos acessar o valor 'felipe' dentro do objeto usuario2 atravéz da
//chave 'nome' e alterar o none de 'felipe' para 'joao'

usuario2.nome = "joao";
//Vamos  acessar o valor '25' atravez da chave 'idade' e altera-la para '49'
usuario2.idade = 49; //como é um numero, não colocamos aspas
//exibe=indo o objeto json 'usuario2' após as alteraçoes

console.log("usuario2 (altareda): ", usuario2);
//#endregion

//#region  acessando valores dentro de um objeto json
const usuario3 = {
  nome: "felipe",
  idade: 25,

  //endereço é uma chave que acessas um valor do tipo json
  endereco: {
    rua: "minha rua",
    bairro: "meu bairro",
    numero: 123,
    estado: {
      sigla: "RS",
      nome: "Rio Grande do Sul",
    },
  },
}

// pegando o valor da chave nome
const nome = usuario3.nome
console.log('nome: ' , nome)

//pegando  arua onde o usuario mora
const rua =usuario3.endereco.rua
console.log('rua: ' , rua)

//peagndo o nome do estado onde o usuario mora
const estado = usuario3.endereco.estado.nome
console.log('estado ', estado)
//#endregion
