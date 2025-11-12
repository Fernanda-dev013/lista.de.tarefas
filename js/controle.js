let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('arealista');

function addTarefa() {
let valorInput = input.value;
if((valorInput!=="") && (valorInput!==null) && (valorInput!==undefined)){
  let novoItem = `<div class="itens">
      <div class="icone">
        <i class="mdi mdi-circle-outline"></i>
      </div>
      <div class="nome">
        Teste de Tarefa
      </div>
      <div class="botao">
        <button class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
      </div>
    </div>`;

    main.innerHTML += novoItem;

}
}