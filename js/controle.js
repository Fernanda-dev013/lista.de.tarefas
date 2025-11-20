let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('arealista');

function addTarefa(){
let valorInput = input.value;
if((valorInput!=="") && (valorInput!==null) && (valorInput!==undefined)){
  
  ++contador;
  let novoItem = `<div id="${contador}" class="itens">
      <div onclick="marcarTarefa(${contador})" class="itens-icone">
        <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
      </div>
      <div onclick="marcarTarefa(${contador})" class="itens-nome">
        ${valorInput}
      </div>
      <div class="botao">
        <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i> Deletar</button>
      </div>
    </div>`;
    
    //adicionar novo item no main
    main.innerHTML += novoItem;

    //zerar campo de tarefa
    input.value = "";
    input.focus();

}
}

function deletar(id){
  var tarefa = document.getElementById(id);
  tarefa.remove();
}

function marcarTarefa(id){
  var itens = document.getElementById(id);
  var classe = itens.getAttribute('class');
  console.log(classe);

  if (classe == "itens") {
    itens.classList.add('clicado');

    var icone = document.getElementById('icone_'+ id);
    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-check-circle');

    itens.parentNode.appendChild(itens);

  } else{
    itens.classList.remove('clicado');

    var icone = document.getElementById('icone_'+ id);
    icone.classList.add('mdi-circle-outline');
    icone.classList.remove('mdi-check-circle');
  }
}


input.addEventListener("keyup",function(event){
  //se teclou enter (13)
  if(event.keyCode ===13){
    event.preventDefault();
    btnAdd.click();
  }
})