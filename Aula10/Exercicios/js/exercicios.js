/*exercicios.js*/
function Tabuada(){
  /*
  valor = document.querySelector("#numero").value;
  resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  for (var i = 0 ; i <= 10; i++ ) {
    resultado.innerHTML += valor + " x " + i + " = " + valor * i + "<br>";
  }*/
  valor = $("#numero").val();
  resultado = "";
  for(var i = 0 ; i <= 10 ; i++){
    resultado += valor + " x " + i + " = " + valor * i + "<br>";
  }
  $("#resultado").html(resultado);
}




function Somar(){
  var n1 = $("#inicio").val();
  var n2 = $("#fim").val();
  var total = 0;
  for (var i = n1; i <= n2; i++) {
    total += parseInt(i);
  }
  $("#resultado").html(total);
}

function NumerosImpares(){
  var n1 = $("#inicio").val();
  var n2 = $("#fim").val();
  var resultado = "";
  for (var i = n1; i <= n2; i++) {
    if( i%2 != 0){
      resultado += i + " , ";
    }
  }
  $("#resultado").html(resultado);
}


function Salario(){
  var salario_hora = $("#salario_hora").val();
  var horas_extras = $("#horas_extras").val();
  var horas_normais = $("#horas_normais").val();
  var nome = $("#nome").val();
  var total = salario_hora * horas_normais + (horas_extras * salario_hora) * 2;
  $("#resultado").html(nome + " seu salário é R$ " + total.toFixed(2));
}


$("#btSomar").on("click", function(event){
  Somar();
});






/**/
