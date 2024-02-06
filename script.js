let worker = new Worker('timeWorker.js');
let Minutos = 0;
let Segundos = 0
let minutos = 0;
let segundos = 0;
let tempoLimite = 1;
let contagemMinuto = 0;
let primeiroClique = false;
// Listen for messages from the worker
worker.onmessage = function (event) {
  // Do something with the counter value in the main thread
  // let counterValue = event.data;
  if(primeiroClique){
  Segundos+=1;

  if(Segundos > 59){
    Minutos+=1; 
    Segundos = 0;
  }

  verificarPassouTempo();
  pegarSegundos(Segundos);
  pegarMinutos(Minutos);
  }
};

let drankWater = document.getElementById("drankWater");
let list = document.getElementById("list");
let exit = document.getElementById("exit");
let text = document.getElementById("text");


let alarme = new Audio("/sons/sound1.wav")

let lista = [];
let contagemNormal = true;
let intervalo = false;
let contagem = 0;
let vezes = 0;
let timer = document.getElementById("counter");

function zerarValores(){
  segundos = 0;
  minutos = 0;
  Minutos = 0;
  Segundos = 0;
}

function pegarSegundos(data){
segundos = ("00" + data).slice(-2);
}

function pegarMinutos(data) {
minutos = ("00" + data).slice(-2);
}



drankWater.addEventListener("click", function(){
  if(primeiroClique){
    if(intervalo){
      zerarValores();
      contagemNormal = true;
      bebiAgua();
      intervalo = false;
    }
  }else{
    primeiroClique = true;
  }
})

list.addEventListener("click", function(){
document.getElementById("listElement").innerHTML = lista.join('<br />')
document.getElementById("listElement").style.background = "rgba(221, 217, 195, 0.575)";
})

exit.addEventListener("click", function(){
document.getElementById("listElement").innerHTML = "";
document.getElementById("listElement").style.background = "rgba(221, 217, 195, 0)";
});

function alterarTimer(){
timer.innerHTML = `${minutos}:${segundos}`;
if(intervalo){
  text.innerHTML = "ESTAMOS EM PAUSA!";
}else if(intervalo == false){
  text.innerHTML = "ESTAMOS RODANDO!";
}

console.log("==============================================")
console.log("segundos :" + segundos + " e minutos: "+minutos)
}

function bebiAgua(){
var currentDate = new Date();
lista.push(currentDate + " - Dei Pausa")

}

function tocarSom(){
alarme.play();
zerarValores();
}

function verificarPassouTempo(){
  if(primeiroClique){
    if(contagemNormal){
      if(minutos == 50){
        tocarSom();
        intervalo = true;
        contagemNormal = false;
      }
    }else if(contagemNormal == false){
      if(minutos == 10){
        var currentDate = new Date();
        lista.push(currentDate + " - NÃO Dei Pausa")
        tocarSom();
        intervalo = false;
        contagemNormal = true;
      }
    }
  }
alterarTimer();
console.log("Intervalo: "+intervalo)
console.log("Tipo de Contagem: "+contagemNormal)
// console.log("Hora(s): " + horas + " / Minuto(s): " + minutos);
};

