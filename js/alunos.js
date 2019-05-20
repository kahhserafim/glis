var alunos = document.querySelectorAll(".alunos");

for (var i = 0; i < alunos.length; i++) {

    var aluno = alunos[i];

    var tdIdade = aluno.querySelector(".info-idade");
    var idade = tdIdade.textContent;

    var tdNivel = aluno.querySelector(".info-nivel");
    var nivel = tdNivel.textContent;

    var tdTurma = aluno.querySelector(".info-turma");

}
var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var forma = document.querySelector("#form-adiciona");

    var nome = forma.nome.value;
    var idade = forma.idade.value;
    var nivel = forma.nivel.value;
    var turma = forma.turma.value;

    var alunoTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var idadeTd = document.createElement("td");
    var nivelTd = document.createElement("td");
    var turmaTd = document.createElement("td");
    
    nomeTd.textContent = nome;
    idadeTd.textContent = idade;
    nivelTd.textContent = nivel;
    turmaTd.textContent = turma;

    alunoTr.appendChild(nomeTd);
    alunoTr.appendChild(idadeTd);
    alunoTr.appendChild(nivelTd);
    alunoTr.appendChild(turmaTd);

    var tabela = document.querySelector("#tabela-alunos");

    tabela.appendChild(alunoTr);

});

console.log(aluno);