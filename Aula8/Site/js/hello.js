console.log("Olá, Mundo");

/* ADIÇÃO */
console.log("12 + 13");
console.log(12+13);

/* MULTIPLICAÇÃO */
console.log("14 + 3");
console.log(14 + 3);

/* SUBTRAÇÃO */
console.log("10 - 4");
console.log(10 - 4);

/* DIVISÃO */
console.log("25 / 5");
console.log(25 / 5);

/* MÓDULO */
console.log("23 % 2");
console.log(23 % 2);


var curso = "Desenvolvimento Front-End";
console.log(curso);

curso = "Desenvolvedor Web";
console.log(curso);

var n1 = 10;
var n2 = 3;
console.log(n1 / n2);

n1 = 15;
console.log(n1 / n2);




/* PEGA O CONTEUDO DO CAMPO CONTATO-NOME E COLOCA NA DIV ENDERECO, DEPOIS LIMPA O CAMPO CONTATO-NOME */
function MudarEndereco(){
    var endereco = document.querySelector("#endereco");
    var contatonome = document.querySelector("#contato-nome");
    endereco.innerHTML = "<h3>" + contatonome.value + "</h3>";
    contatonome.value = "";
}
