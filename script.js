const drankWater = document.getElementById("drankWater");
const list = document.getElementById("list");
const exit = document.getElementById("exit");
let currentDate = new Date();


let frames = 0;
let segundos = 0;
let minutos = 0;
let horas = 0;

let vezes = 0;
function verificarPassouDia(){
  if(frames >= 60){
    segundos += 1;
    frames = 0;
  }

  if(segundos >= 60){
    minutos += 1;
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
  console.log("Horas: " + horas + " / Minutos: " + minutos + "/ Segundos: " + segundos)
}

function bebiAgua(){
  vezes += 1;
}

drankWater.addEventListener("click", function(){
  bebiAgua();
})

list.addEventListener("click", function(){
  
})

exit.addEventListener("click", function(){
  
})

function loop(){
  verificarPassouDia(frames);
  frames += 1;
  requestAnimationFrame(loop);
}
loop();