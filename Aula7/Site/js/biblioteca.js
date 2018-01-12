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

/*
Função que valida se os campos do formulário de contato foram preenchidos
*/
function ValidarContato(){
    var nome = document.querySelector("#contato-nome");
    var email = document.querySelector("#email");
    var assunto = document.querySelector("#assunto");
    var comentario = document.querySelector("#comentario");
    /*
    if(nome == ""){
      alert("O campo nome deve ser preenchido.");
      return false;
    }

    if(email == ""){
      alert("o campo email deve ser preenchido");
      return false;
    }

    if(assunto == ""){
      alert("o campo assunto deve ser preenchido");
      return false;
    }

    if(comentario == ""){
      alert("o campo comentario deve ser preenchido");
      return false;
    }
    */
    if(nome.value == "" || email.value == "" || assunto.value == "" || comentario.value == ""){
      alert("Todos os campos são OBRIGATÓRIOS!");
      if(nome.value == ""){
        nome.style.borderColor = "red";
        nome.style.backgroundColor = "tan";
      }else{
        nome.style.borderColor = "";
        nome.style.backgroundColor = "white";
      }

      if(email.value == ""){
        email.style.borderColor = "red";
        email.style.backgroundColor = "tan";
      }else{
        email.style.borderColor = "";
        email.style.backgroundColor = "white";
      }

      if (assunto.value == "") {
        assunto.style.borderColor = "red";
        assunto.style.backgroundColor = "tan";
      }else{
        assunto.style.borderColor = "";
        assunto.style.backgroundColor = "white";
      }

      if (comentario.value == "") {
        comentario.style.borderColor = "red";
        comentario.style.backgroundColor = "tan";
      }else {
        comentario.style.borderColor = "";
        comentario.style.backgroundColor="white";
      }

      return false;
    }
}


function MudarBanner(BannerAtual, botao){
  document.querySelector("#BotaoBanner1").style.backgroundColor = "";
  document.querySelector("#BotaoBanner2").style.backgroundColor = "";
  document.querySelector("#BotaoBanner3").style.backgroundColor = "";
  document.querySelector(botao).style.backgroundColor="yellow";

  var banner1 = document.querySelector("#banner1");
  var banner2 = document.querySelector("#banner2");
  var banner3 = document.querySelector("#banner3");
  banner1.style.display = "none";
  banner2.style.display = "none";
  banner3.style.display = "none";
  document.querySelector(BannerAtual).style.display="block";
}

MudarBanner('#banner1','#BotaoBanner1');


function Mensagem(msg){
  alert(msg);
}

setTimeout(function(){Mensagem("Hello");}, 3000);
setInterval(function(){Mensagem("Hello2");}, 3000);





/**/
