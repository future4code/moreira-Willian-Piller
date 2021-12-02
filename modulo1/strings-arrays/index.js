let nome = prompt("qual e o seu nome?")
let gmail = prompt("qual e o seu email")
let concat = "O e-mail " +  gmail + " foi cadastrado com sucesso. Seja bem-vinda " + nome ;
console.log(concat)

let comidas = ["churrasco ," ,"macarrão" , "pizza" , "strogonoff" , "baião de 2" ,]
console.log(comidas)
console.log("Essas são as minhas comidas preferidas:") 
console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])
console.log(comidas[3])
console.log(comidas[4])
let comidas2 = prompt("qual e sua comidas preferidas?")
let i = 0
comidas[i+1] = comidas2
console.log(comidas)

let listaDeTarefas = []
let tarefas1 = prompt("qual e primeira atividade do dia")
let tarefas2 = prompt("qual e segunda atividade do dia")
let tarefas3 = prompt("qual e terceira atividade do dia")
listaDeTarefas.push(tarefas1 , tarefas2 , tarefas3 , )
console.log(listaDeTarefas)
let pede = prompt("digite uma tarefas que ja concluio")