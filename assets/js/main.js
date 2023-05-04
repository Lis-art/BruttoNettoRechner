function berechne(){
   
    let steuer1 = document.querySelector('#N-zu-B').checked;
    let steuer19 = document.querySelector('#neunzehn').checked;
    let steuer2 = document.querySelector('#B-zu-N').checked;
    let steuer7 = document.querySelector('#sieben').checked;
    let inputPrice = document.querySelector("#priceInput");
    let inputPriceValue = inputPrice.value;
    let inputAsNum = Number(inputPriceValue.replaceAll(",", "."));

    if (steuer1 && steuer19) {
        mwstBerechnen = inputAsNum * 0.19;
        bruttoErgebnis = mwstBerechnen + inputAsNum;
        nettoErgebnis = 0,00;
        document.querySelector(".mehrwertSteuerBetrag").innerHTML = mwstBerechnen.toFixed(2);
        document.querySelector(".bruttoBetrag").innerHTML = bruttoErgebnis.toFixed(2);
        document.querySelector(".nettoBetrag").innerHTML = nettoErgebnis.toFixed(2);

    }  else if (steuer1 && steuer7) {
        mwstBerechnen = inputAsNum * 0.7;
        bruttoErgebnis = mwstBerechnen + inputAsNum;
        nettoErgebnis = 0,00;
        document.querySelector(".mehrwertSteuerBetrag").innerHTML = mwstBerechnen.toFixed(2);
        document.querySelector(".bruttoBetrag").innerHTML = bruttoErgebnis.toFixed(2);
        document.querySelector(".nettoBetrag").innerHTML = nettoErgebnis.toFixed(2);

    } else if (steuer2 && steuer19) {
        mwstBerechnen= inputAsNum / 1.19;
        nettoErgebnis= inputAsNum - mwstBerechnen;
        bruttoErgebnis = 0,00;
        document.querySelector(".mehrwertSteuerBetrag").innerHTML = nettoErgebnis.toFixed(2);
        document.querySelector(".bruttoBetrag").innerHTML = bruttoErgebnis.toFixed(2);
        document.querySelector(".nettoBetrag").innerHTML =  mwstBerechnen.toFixed(2);

    }  else if (steuer2 && steuer7) {
        mwstBerechnen = inputAsNum / 1.07;
        nettoErgebnis = inputAsNum - mwstBerechnen;
        bruttoErgebnis = 0,00;
        document.querySelector(".mehrwertSteuerBetrag").innerHTML = nettoErgebnis.toFixed(2);
        document.querySelector(".bruttoBetrag").innerHTML = bruttoErgebnis.toFixed(2);
        document.querySelector(".nettoBetrag").innerHTML =  mwstBerechnen.toFixed(2);
    } 
}
    
