function Cadastrar(){
  var nome = document.querySelector("#nome").value;
  var sobrenome = document.querySelector("#sobrenome").value;
  var resposta = document.querySelector("#resposta");
  resposta.innerHTML = "O cliente <b>" + nome + " " + sobrenome + "</b> foi cadastrado com sucesso.";
}

function Original(){
  document.querySelector("body").className = "";
}

function Rosa(){
  document.querySelector("body").className = "rosa";
}

function Alternativo(){
  document.querySelector("body").className = "alternativo";
}


/*
var estilos = ["","rosa","alternativo", "verde"];
function MudarEstilo(valor){
  document.querySelector("body").className = estilos[valor];
}
*/




/**/
