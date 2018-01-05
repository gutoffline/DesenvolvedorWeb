function TrocaNome(){
    var nome = document.querySelector("#nome");
    var sobrenome = document.querySelector("#sobrenome");
    sobrenome.value = nome.value;
    nome.value = "";
}


function MostrarData(){
    var data = new Date();

    var dia     = data.getDate();       // 1-31
    var mes     = data.getMonth();      // 0-11 (zero=janeiro)
    var ano    = data.getFullYear();    // 4 dígitos

    var data_completa = dia + '/' + (mes+1) + '/' + ano;

    alert('Hoje é ' + data_completa);
}









