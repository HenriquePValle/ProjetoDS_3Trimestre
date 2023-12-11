function inserirDados() {
    let formulario = document.getElementById('formulario');
    let numero = document.getElementsByClassName('tabela__body__linha').length;
    numero++;
    let nome = formulario.querySelector('#aluno_nome').value;
    let nota = Number(formulario.querySelector('#aluno_nota').value);
    let situacao;
    if(nota < 6) {
        situacao = "Reprovado"
    }
    else {
        situacao = "Aprovado";
    }
    let corpo_tabela = document.querySelector('.tabela__body');
    corpo_tabela.innerHTML +=
    `<tr class="tabela__body__linha">
        <td class="tabela__linha__numero">${numero}</td>
        <td class="tabela__linha__nome">${nome}</td>
        <td class="tabela__linha__nota">${nota}</td>
        <td class="tabela__linha__situacao">${situacao}</td>
    </tr>`;
    formulario.reset();
}
