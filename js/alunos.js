var alunos = document.querySelectorAll(".alunos");

for (var i = 0; i < alunos.length; i++) {

    var aluno = alunos[i];

    var tdIdade = aluno.querySelector(".info-idade");
    var idade = tdIdade.textContent;

    var tdNivel = aluno.querySelector(".info-nivel");
    var nivel = tdNivel.textContent;

    var tdTurma = aluno.querySelector(".info-turma");

}

function calculaMatricula(nivel){
    var valor = 0;
    if (nivel == "intermediário"){
        valor = "R$"+"200.00";
    }
    if (nivel == "avançado"){
        valor = "R$"+"300.00";
    }
    if (nivel == "básico"){
        valor = "R$"+"100.00";
    }

    return valor;
}


function validaAluno(aluno){
    if((aluno.nome == "") || (aluno.idade.value <= 0 || aluno.idade.value >= 150) || (aluno.nivel == "") || (aluno.turma =="")){
        return false;
    }else{
        return true;
    }
}