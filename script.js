const drankWater = document.getElementById("drankWater");
const list = document.getElementById("list");
const exit = document.getElementById("exit");

const alarme = new Audio("/sons/sound1.wav")

var currentDate = new Date();

let lista = [];

let ativeiBotao = false;
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
        var currentDate = new Date();
        lista.push(currentDate + " - NÃO Bebi Água")
        contagem = 0;
        tocouSom = false;
        podeBeber = false;
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
  console.log("Hora(s): " + horas + " / Minuto(s): " + minutos + "/ Segundo(s): " + segundos);
}

function bebiAgua(){
  var currentDate = new Date();
  lista.push(currentDate + " - Bebi Água")
  vezes += 1;
  podeBeber = false;
}

function tocarSom(){
  alarme.play();
  tocouSom = false;
}

drankWater.addEventListener("click", function(){
  console.log(contagem)
  if(podeBeber){
    bebiAgua();
    contagem = 0;
  }
})

list.addEventListener("click", function(){
  // lista.forEach((elem, index) => {
  document.getElementById("listElement").innerHTML = lista.join('<br />')
  ativeiBotao = true;
  document.getElementById("listElement").style.background = "rgba(221, 217, 195, 0.575)";
  // })  
})

exit.addEventListener("click", function(){
  document.getElementById("listElement").innerHTML = "";
  ativeiBotao = false;
  document.getElementById("listElement").style.background = "none";
})

function loop(){
  verificarPassouDia(frames);
  frames += 1;
  requestAnimationFrame(loop);
}
loop();