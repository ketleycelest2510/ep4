function botao_resposta() {
    var respostausuario1 = document.querySelector('input[name="resposta1"]:checked');
    var respostausuario2 = document.querySelector('input[name="resposta2"]:checked');
    var respostausuario3 = document.querySelector('input[name="resposta3"]:checked');
    var respostausuario4 = document.querySelector('input[name="resposta4"]:checked');
    var respostausuario5 = document.querySelector('input[name="resposta5"]:checked');
    var respostausuario6 = document.querySelector('input[name="resposta6"]:checked');
    var respostausuario7 = document.querySelector('input[name="resposta7"]:checked');
    var respostausuario8 = document.querySelector('input[name="resposta8"]:checked');
    var respostausuario9 = document.querySelector('input[name="resposta9"]:checked');
    var respostausuario10 = document.querySelector('input[name="resposta10"]:checked');


    if(respostausuario1 && respostausuario2 && respostausuario3 && respostausuario4 && respostausuario5 && respostausuario6 && respostausuario7 && respostausuario8 && respostausuario9 && respostausuario10){
        
        if(respostausuario1.value === "correta"){
            document.getElementById("resultado_1").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada1").innerHTML = "errada";
        }
        if(respostausuario2.value === "correta"){
            document.getElementById("resultado_2").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada2").innerHTML = "errada";
        }
        if(respostausuario3.value === "correta"){
            document.getElementById("resultado_3").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada3").innerHTML = "errada";
        }
        if(respostausuario4.value === "correta"){
            document.getElementById("resultado_4").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada4").innerHTML = "errada";
        }
        if(respostausuario5.value === "correta"){
            document.getElementById("resultado_5").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada5").innerHTML = "errada";
        }
        if(respostausuario6.value === "correta"){
            document.getElementById("resultado_6").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada6").innerHTML = "errada";
        }
        if(respostausuario7.value === "correta"){
            document.getElementById("resultado_7").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada7").innerHTML = "errada";
        }
        if(respostausuario8.value === "correta"){
            document.getElementById("resultado_8").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada8").innerHTML = "errada";
        }
        if(respostausuario9.value === "correta"){
            document.getElementById("resultado_9").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada9").innerHTML = "errada";
        }
        if(respostausuario10.value === "correta"){
            document.getElementById("resultado_10").innerHTML = "acertou";
        }
        else{
            document.getElementById("errada10").innerHTML = "errada";
        }
    }
    else{
        alert("Não deixar questões em aberto!");
    }
}
function ola_usuario(){
    var nome_usu = prompt ("Escreva seu nome:");
    if(nome_usu){
        document.getElementById("nome_usuario").innerHTML = nome_usu;
    }
}
