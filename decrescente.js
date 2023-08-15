var outSaida = document.getElementById("outSaida");
const btMaior = document.getElementById("btMaior");

var vetNum = [39, 2, 8, 58, 42, 15, 7, 19, 21];

btMaior.addEventListener("click", maiorNum);

function maiorNum() {
    for (let ind = 0; ind < vetNum.length; ind++) {
        var inMaior = ind;
        for (let ind2 = ind + 1; ind2 < vetNum.length; ind2++) {

            if (vetNum[ind2] > vetNum[inMaior]) {
                inMaior = ind2;
            }
        }
        var troca = vetNum[ind];
        vetNum[ind] = vetNum[inMaior];
        vetNum[inMaior] = troca;
    }
    outSaida.innerHTML = `Maior número do vetor: ${vetNum}`
}