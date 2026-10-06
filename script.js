function Mensagem1(){



    document.getElementById("descricao").innerHTML=
    "O processador (ou CPU) funciona é o cérebro do computador, responsável por receber dados,interpretar instruções e realizar cálculos em formato binário (0 e 1) e os traduz os codigos binarios recebidos para realizar a tarefa que ele deve fazer.";

}

function Mensagem2(){

    document.getElementById("descricao").innerHTML= "Memoria RAM funciona como a mesa de trabalho do computador. Ela é uma memória ultrarrápida que armazena temporariamente os dados e programas que o processador está utilizando naquele exato momento. Ele é basicamente o intermediador entre o Processador e o HD";

}


function Mensagem3(){

    document.getElementById("descricao").innerHTML= "A placa de video é basicamente o artista que pinta a tela, Enquanto o processador (CPU) foi feito para lidar com tarefas variadas de forma sequencial, a placa de vídeo foi feita focada para calculo e dsenho de texturas, assim o (CPU) para de trabalhar em renderizar,para a placa se dedicar nisso. "

}

function Mensagem4(){

    document.getElementById("descricao").innerHTML= "HD (Disco Rígido) e o SSD (Unidade de Estado Sólido) são os componentes de armazenamento permanente do computador. Enquanto a memória RAM apaga tudo ao ser desligada, é aqui que ficam salvos o seu sistema operacional (Windows, Mac ou Linux), seus jogos, fotos e programas de forma definitiva."

}



function aumentarTexto(){

    document.getElementById("descricao").style.fontSize= "30px";

}

function diminuirTexto(){

    document.getElementById("descricao").style.fontSize= "20px";

}


function esconderTexto(){

    document.getElementById("descricao").style.display= "none";

}

function mostrarTexto(){

    document.getElementById("descricao").style.display= "block";

}

function alterarTitulo(){

    document.getElementById("titulo").innerHTML= "Bem-vindo ao meu site!"

}

function retornarTitulo(){

    document.getElementById("titulo").innerHTML= "COMPONENTES DO COMPUTADOR"

}

function MudarCor(){

    document.body.style.backgroundColor= "#d9f2ff";

}
