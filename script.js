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
            document.getElementById("resultado_1").innerHTML = "acertous!!! Parabens";
        }
        else{
            document.getElementById("errada1").innerHTML = "errada!!! A resposta certa é a C. Um político que exerceu a presidência do Brasil em duas ocasiões.";
        }
        if(respostausuario2.value === "correta"){
            document.getElementById("resultado_2").innerHTML = "acertou!!! Parabens";
        }
        else{
            document.getElementById("errada2").innerHTML = "errada!!! A resposta certa é a B.A Revolução de 1930.";
        }
        if(respostausuario3.value === "correta"){
            document.getElementById("resultado_3").innerHTML = "acertou!!! Parabens";
        }
        else{
            document.getElementById("errada3").innerHTML = "errada!!! A resposta certa é a  B. Um regime autoritário com censura à imprensa e restrições às liberdades civis.";
        }
        if(respostausuario4.value === "correta"){
            document.getElementById("resultado_4").innerHTML = "acertou!!! Parabens";
        }
        else{
            document.getElementById("errada4").innerHTML = "errada!!! A resposta certa é a B. Foi criada a CLT (Consolidação das Leis do Trabalho) que estabeleceu direitos trabalhistas.";
        }
        if(respostausuario5.value === "correta"){
            document.getElementById("resultado_5").innerHTML = "acertou!!! Parabens";
        }
        else{
            document.getElementById("errada5").innerHTML = "errada!!! A resposta certa é a C.Pressões políticas e militares que o forçaram a renunciar.";
        }
        if(respostausuario6.value === "correta"){
            document.getElementById("resultado_6").innerHTML = "acertou!!! Parabens";
        }
        else{
            document.getElementById("errada6").innerHTML = "errada!!! A resposta certa é a  A.Os Aliados.";
        }
        if(respostausuario7.value === "correta"){
            document.getElementById("resultado_7").innerHTML = "acertou!!! Parabens";
        }
        else{
            document.getElementById("errada7").innerHTML = "errada!!! A resposta certa é a B. Indústria e urbanização.";
        }
        if(respostausuario8.value === "correta"){
            document.getElementById("resultado_8").innerHTML = "acertou!!! Parabens";
        }
        else{
            document.getElementById("errada8").innerHTML = "errada!!! A resposta certa é a A.Foi promovida a industrialização, com o Estado desempenhando um papel ativo na economia.";
        }
        if(respostausuario9.value === "correta"){
            document.getElementById("resultado_9").innerHTML = "acertou!!! Parabens";
        }
        else{
            document.getElementById("errada9").innerHTML = "errada!!! A resposta certa é a C.A Petrobras (Petróleo Brasileiro S.A.).";
        }
        if(respostausuario10.value === "correta"){
            document.getElementById("resultado_10").innerHTML = "acertou!!! Parabens";
        }
        else{
            document.getElementById("errada10").innerHTML = "errada!!! A resposta certa é a D. Cometeu suicídio devido a pressões políticas e protestos.";
        }
    }
    else{
        alert("Não deixar questões em aberto!");/*alertar que deixou questoes em branco*/
    }
}
function ola_usuario(){/*para colocar o nome do usuario*/
    var nome_usu = prompt ("Escreva seu nome:");
    if(nome_usu){
        document.getElementById("nome_usuario").innerHTML = nome_usu;
    }
}
