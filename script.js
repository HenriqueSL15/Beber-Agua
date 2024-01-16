const drankWater = document.getElementById("drankWater");
const list = document.getElementById("list");
const exit = document.getElementById("exit");

const alarme = new Audio("/sons/sound1.wav")
let currentDate = new Date();
currentDate.toString();

let lista = [];

let tocouSom = false;
let podeBeber = false;

let contagem = 0;

let frames = 0;
let segundos = 55;
let minutos = 59;
let horas = 0;

let vezes = 0;
function verificarPassouDia(){
  if(frames >= 60){
    segundos += 1;
    frames = 0;
  }

  if(segundos >= 60){
    minutos += 1;
    if(minutos == 30 || minutos >= 59){
      tocarSom();
      tocouSom = true;
      podeBeber = true;
    }

    if(tocouSom){
      contagem += 1;
      if(contagem >= 2){
        lista.push(currentDate + " - NÃO Bebi Água")
        tocouSom = false
      }
    }
    segundos = 0;
  }

  if(minutos >= 60){
    horas += 1;
    minutos = 0;
  }

  if(horas > 24){
    horas = 1;
    minutos = 0;
  }
  // console.log("Horas: " + horas + " / Minutos: " + minutos + "/ Segundos: " + segundos);
}

function bebiAgua(){
  lista.push(currentDate + " - Bebi Água")
  vezes += 1;
  podeBeber = false;
}

function tocarSom(){
  alarme.play();
  tocouSom = false;
}

drankWater.addEventListener("click", function(){
  if(podeBeber){
    bebiAgua();
  }
})

list.addEventListener("click", function(){
  console.log(lista)
})

exit.addEventListener("click", function(){
  
})

function loop(){
  verificarPassouDia(frames);
  frames += 1;
  requestAnimationFrame(loop);
}
loop();