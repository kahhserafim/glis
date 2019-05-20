
var botaoAdicionar = document.querySelector("#adicionar-aluno");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    var aluno = coletaDadosAluno(form);

    var alunoTr = montaTr(aluno);
    
    var tabela = document.querySelector("#tabela-alunos");

    tabela.appendChild(alunoTr);

    form.reset();

});

function coletaDadosAluno(form){
    var aluno = {
        nome: form.nome.value,
        idade: form.idade.value,
        nivel: form.nivel.value,
        turma: form.turma.value,
        matricula: calculaMatricula(form.nivel.value)
    }     
    return aluno;
}

function montaTr(aluno){
    var alunoTr = document.createElement("tr");
    alunoTr.classList.add("alunos")

    alunoTr.appendChild(montaTd(aluno.nome, "info-peso"));
    alunoTr.appendChild(montaTd(aluno.idade, "info-idade"));
    alunoTr.appendChild(montaTd(aluno.nivel, "info-nivel"));
    alunoTr.appendChild(montaTd(aluno.turma, "info-turma"));
    alunoTr.appendChild(montaTd(aluno.matricula, "info-matricula"));

    return alunoTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}