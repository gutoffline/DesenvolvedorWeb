/*exercicios.js*/
function Tabuada(){
  valor = document.querySelector("#numero").value;
  resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
  for (var i = 0 ; i <= 10; i++ ) {
    resultado.innerHTML += valor + " x " + i + " = " + valor * i + "<br>";
  }
}

function Somar(){
  var n1 = document.querySelector("#inicio").value;
  var n2 = document.querySelector("#fim").value;
  var resultado = document.querySelector("#resultado");
  var total = 0;
  for (var i = n1; i <= n2; i++) {
    total += parseInt(i);
  }
  resultado.innerHTML = total;
}

function NumerosImpares(){
  var n1 = document.querySelector("#inicio").value;
  var n2 = document.querySelector("#fim").value;
  var resultado = document.querySelector("#resultado");
  for (var i = n1; i <= n2; i++) {
    if( i%2 != 0){
      resultado.innerHTML += i + " , ";
    }
  }
}


function Salario(){
  var salario_hora = document.querySelector("#salario_hora").value;
  var horas_extras = document.querySelector("#horas_extras").value;
  var horas_normais = document.querySelector("#horas_normais").value;
  var nome = document.querySelector("#nome").value;
  var resultado = document.querySelector("#resultado");
  var total = salario_hora * horas_normais + (horas_extras * salario_hora) * 2;
  resultado.innerHTML = nome + " seu salário é R$ " + total.toFixed(2);
}




/**/
