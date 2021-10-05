// set the variables




const btnA = document.getElementById('btnAgro');
const btnB = document.getElementById('btnBradford');
const agroCalc = document.getElementById('agroCalc');
const bradfordCalc = document.getElementById('bradfordCalc');

// set the event listener

agroCalc.addEventListener('submit', function(){
    var Conc = document.getElementById('agroConc').value;
    var od = document.getElementById('odAgro').value;
    var a = (od*50)/Conc;
    var b = (500/a)*4;
    console.log(b);
});

bradfordCalc.addEventListener('submit', function(){
    var conc = document.getElementById('bradfordConc').value;
    var od = document.getElementById('odBradford').value;
    var a = ((od *10) * 0.8847 + 0128) * 1000;
    var b = (conc/a) * 1000;
    console.log(b);
});