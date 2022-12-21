function Aluno(nome, nota1, nota2, media) {
  this.nome = nome
  this.nota1 = nota1
  this.nota2 = nota2
  this.media = media
}

let alunos = []
let index

while(index !=3) {

index = Number(prompt(`
  1 - Cadastrar novo aluno(a)
  2 - Calcular resultado dos alunos
  3 - Sair
  `))

if(index == 1) {
  
    let nome = prompt("Insira o nome do aluno(a)")
    let nota1 = Number(prompt("Insira a primeira nota do aluno(a)"))
    let nota2 = Number(prompt("Insira a segunda nota do aluno(a)"))
    let media = (nota1 + nota2) / 2
    alunos.push(new Aluno(nome, nota1, nota2, media))  
}
else if(index == 2){
  for(i = 1; i <= alunos.length; i++){
      
    if(alunos[i-1].media >= 7) {
      alert(`
      A média do aluno(a) ${alunos[i-1].nome} é: ${alunos[i-1].media}
      Parabéns ${alunos[i-1].nome} você foi aprovado(a)!!!
      `)
    }
    else {
      alert(`
      A média do aluno(a) ${alunos[i-1].nome} é: ${alunos[i-1].media}
      Não foi dessa vez ${alunos[i-1].nome}, tente novamente.
      `)
    }
    
  }
}

else {
  alert("Até mais!")
  }
  
}
