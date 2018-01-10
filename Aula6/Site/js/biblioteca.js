//alert("BIBLIOTECA");

/*
Pega as informações do formulário de IMC, calcula o IMC e insere o cadastro na tabela de clientes
*/
function CadastraIMC(){
  //alert("Cadastra IMC");

  //PEGA TBODY DA TABELA #pacientes
  var tabela = document.querySelector("#pacientes tbody");

  //PEGAR informações DOS CAMPOS
  var nome = document.querySelector("#nome").value;
  var telefone = document.querySelector("#telefone").value;
  var idade = document.querySelector("#idade").value;
  var peso = document.querySelector("#peso").value;
  var altura = document.querySelector("#altura").value;

  var imc = peso / (altura * altura);

  var mensagem_imc = "";

  if(imc < 16){
    mensagem_imc = " Magreza grave ";
  }else if(imc < 17){
    mensagem_imc = " Magreza moderada ";
  }else if(imc < 18.5){
    mensagem_imc = " Magreza leve ";
  }else if(imc < 25){
    mensagem_imc = " Saudável ";
  }else if(imc < 30){
    mensagem_imc = " Sobrepeso ";
  }else if(imc < 35){
    mensagem_imc = " Obesidade Grau I ";
  }else if(imc < 40){
    mensagem_imc = " Obesidade Grau II (Severa) ";
  }else{
    mensagem_imc = "Obesidade Grau III (Mórbida)";
  }

  //MONTA UMA LINHA PARA SER INSERIDA NA TABELA
  var linha = "<tr onclick='ExcluirLinha(this);'> <td> " + nome + " </td> <td> "+telefone+" </td> <td> "+idade+" anos</td> <td> "+altura+" m</td> <td> "+peso+" kg</td> <td> " + imc.toFixed(2) + mensagem_imc + " </td> </tr>";

  //INCLUI UMA NOVA LINHA NA TABELA
  tabela.innerHTML += linha;

  LimparIMC();
}

/*
função para limpar os campos do formulário de IMC
*/
function LimparIMC(){
  //limpar os CAMPOS
  document.querySelector("#nome").value = "";
  document.querySelector("#telefone").value = "";
  document.querySelector("#idade").value = "";
  document.querySelector("#peso").value = "";
  document.querySelector("#altura").value = "";
}


/*
Exclui uma linha da TABELA
*/
function ExcluirLinha(linha){
  linha.remove();
}
