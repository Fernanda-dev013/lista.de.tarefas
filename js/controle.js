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
        ${valorInput}
      </div>
      <div class="botao">
        <button class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
      </div>
    </div>`;
    
    //adicionar novo item no main
    main.innerHTML += novoItem;

    //zerar campo de tarefa
    input.value = "";
    input.focus();

}
}

input.addEventListener("keyup",function(event){
  //se teclou enter (13)
  if(event.keyCode ===13){
    event.preventDefault();
    btnAdd.click();
  }
})