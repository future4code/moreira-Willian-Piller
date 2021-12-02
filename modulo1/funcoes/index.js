// eu sou caio tenho 18 anos, moro mato grosso e sou estudante
const meuNome = "will"
const minhaIdade = 13
const minhaCidade = "colider" 
const souEstudante = "sim"
    
function informacoes() {
    const frase = "eu sou " + meuNome + " tenho " + minhaIdade + " anos, moro " + minhaCidade  + " estudante " + souEstudante
    return frase
} 
console.log(informacoes())

function funcoes(a1, a2, a3, a4, ){
    a1=  meuNome;
    a2= minhaIdade;
    a3= minhaCidade; 
    a4= souEstudante;
    const frase1 = `eu sou ${a1} eu tenho ${a2} anos eu moro ${a3}
    sou esudante - ${a4}`
    return frase1
}
console.log(funcoes())

function numeros(x, y){
    const soma = x+y 
    return soma
}
console.log(numeros(2, 4))

function numero1(a, b){
    const comp = a >= b
    return comp 
}
console.log(numero1(4, 2))

function numero2(d){
    const nun = d % 2==0
    return nun

}
console.log(numero2(3))

function mensagem(string){
    const men = string.toUpperCase()
    return men 

}
console.log(mensagem("ta chovendo"))
console.log(mensagem("ta chovendo").length)
 
function basicas(a, b){
    const soma = a + b;
    const menos = a - b;
    const vezes = a * b;
    const divisao = a / b;
        const resultado = `numeros inseridos ${a} e ${b}
        soma ${soma} 
        diferença ${menos}
        multiplicação ${vezes}
        divisão ${divisao} `
    return resultado
}
console.log(basicas(10, 5))