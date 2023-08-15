var outSaida = document.getElementById("outSaida");
const btOrdenar = document.getElementById("btOrdenar");

var vetNum = [39, 2, 8, 58, 42, 15, 7, 19, 21];

btOrdenar.addEventListener("click", ordenarNum);
//Este por Sindy;;
function ordenarNum() {
    for (var ind = 0; ind < vetNum.length; ind++) { //percorre vetor
        var indMenor = ind; //indice de comparação;

        for (indDois = ind + 1; indDois < vetNum.length; indDois++) { //para verificar se tem troca ou não na posição percorrida; ordenar para cada percorrida;

            if (vetNum[indDois] < vetNum[indMenor]) { //de trás para frente ele compara no vetor inteiro;
                indMenor = indDois; //fica aqui o menor número

            }
        }
        var aux = vetNum[ind]; //trocando números
        vetNum[ind] = vetNum[indMenor];//trocando números
        vetNum[indMenor] = aux;//trocando números
    }
    outSaida.innerHTML = `Números ordenados: ${vetNum}`;
}

const btLimpar = document.getElementById("btLimpar");
btLimpar.addEventListener("click", limparSaida);
function limparSaida(){
    outSaida.innerHTML = "Números ordenados: <br> Maior número do vetor:"
}