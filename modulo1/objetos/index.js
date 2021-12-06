// Exemplo de entrada
const pessoa = {
    nome: "willian", 
    apelidos: ["will", "bill", "billy"]
    
 }
 const meusApelidos = (objeto) => {
console.log(`eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]},${objeto.apelidos[1]} ou  ${objeto.apelidos[2]}`)
 }
 meusApelidos(pessoa)

const novosApelidos = {
  ...pessoa,
     apelidos: ["xara", "bred", "brow"]
    
}
meusApelidos(novosApelidos)

const dadosPessoas = [
    {
        nome:"willian",
        idade: 21,
        profissao : "dev"

    },
     {
         nome : "billy",
          idade: 32,
         profissao : "mecanico"
     }
]
const dadosPessoasArray = (pessoa1,pessoa2) => {
  return [
    pessoa1.nome, pessoa1.nome.length,pessoa1.idade,pessoa1.profissao,pessoa1.profissao,length,
    pessoa2.nome, pessoa2.nome.length,pessoa2.idade,pessoa2.profissao,pessoa2.profissao,length,
      
  ]  
}
console.log(dadosPessoasArray(dadosPessoas[0], dadosPessoas[1]))

const carrinho = []
      const frutas = [
      {
       nome: "manga",
        disponibilidade: true

      },
      {nome: "banana",
      disponibilidade: true

    },
    {
        nome: "pera",
        disponibilidade: true
  
    },
      ]
      const addCarrinho = (objeto) => {
          return carrinho.push(objeto)
      }
        addCarrinho(frutas)
     console.log(carrinho)
