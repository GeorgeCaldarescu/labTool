// set the variables

let resultAgro = document.getElementById('resultAgro');
let resultBradford = document.getElementById('resultBradford');

// set the event listener

agroCalc.addEventListener('submit', function(){
    var Conc = document.getElementById('agroConc').value;
    var od = document.getElementById('odAgro').value;
    var a = (od*50)/Conc;
    var b = (500/a)*4;
    let str = 'Result: ';
    str += 'add ';
    str += b;
    str += 'ul to 2ml of infiltration buffer';
    resultAgro.textContent = str;
});

bradfordCalc.addEventListener('submit', function(){
    var od = document.getElementById('odBradford').value;
    var a = (((od *10) * 0.8847) + 0.128) * 1000;
    var conc = document.getElementById('bradfordConc').value;
    var b = (conc/a) * 1000;
    let stri = 'Result: ';
    stri =+ Math.round(b);
    stri += 'ul. And';
    stri += Math.round(b/5);
    stri += 'SDS';
    resultBradford.textContent = stri;
});

// metti apposto il risultato di Bradford
// e capisci perche ti manda sopra quando clicchi su submit in bradford