const readline = require('readline');

//criando interface para leitura de dados
const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularSaldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}


function calcularRankingPlayer(numeroVitorias) {

    //criei a função para usar o switch com case
    switch (true) {
        case numeroVitorias < 10:
            ranking = "Ferro";
            break;
        case numeroVitorias >= 11 && numeroVitorias <= 20:
            ranking = "Bronze";
            break;
        case numeroVitorias >= 21 && numeroVitorias <= 50:
            ranking = "Prata";
            break;
        case numeroVitorias >= 51 && numeroVitorias <= 80:
            ranking = "Ouro";
            break;
        case numeroVitorias >= 81 && numeroVitorias <= 90:
            ranking = "Diamante";
            break;
        case numeroVitorias >= 91 && numeroVitorias <= 100:
            ranking = "Lendário";
            break;
        case numeroVitorias >= 101:
            ranking = "Imortal";
            break;
        default:
            ranking = "Ranking nao calculado";
            break;
    }

    return ranking;
}

// Aqui mostrar os inputs do usuário
read.question('Informe o numero de vitorias: ', (vitorias) => {
    read.question('Informe o numero de derrotas: ', (derrotas) => {
        derrotas = parseInt(derrotas);


        const numeroVitorias = calcularSaldoVitorias(vitorias, derrotas);

        const ranking = calcularRankingPlayer(numeroVitorias);

        console.log("O Heroi tem um saldo de " + numeroVitorias + " esta no nivel de " + ranking);

        read.close();
    });
});
