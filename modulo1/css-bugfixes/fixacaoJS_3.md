ˋˋˋfunction calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
}function calculaNota(ex, p1, p2) {
  const exercicio = ex * 1;
  const resultadoUm = p1 * 2;
  const resultadoDois = p2 * 3;
  
  const media = (exercicio + resultadoDois + resultadoUm) / 6; 

  if(media >= 9){
    return "A"
  }
  
  if(media < 9 && media >= 7.5){
    return "B"
  }
    if (media < 7.5 && media >= 6){
      return "C"
      
    }
    else{
     return "D"
    
   }

  // Escreva seu código aqui
}ˋˋˋ