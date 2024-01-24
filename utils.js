let minutos = 0;
let horas = 0;

export function pegarMinutos(data) {
  minutos = data;
  console.log("Minutos: ", minutos);
  console.log(contagem)
  verificarPassouTempo();
}

export function pegarHoras(data) {
  horas = data;
  console.log("Horas: ", horas);
}

let drankWater = document.getElementById("drankWater");
let list = document.getElementById("list");
let exit = document.getElementById("exit");

let alarme = new Audio("/sons/sound1.wav")

let currentDate = new Date();

let lista = [];

let ativeiBotao = false;
let tocouSom = false;
let podeBeber = false;

let contagem = 0;

let vezes = 0;

drankWater.addEventListener("click", function(){
  if(podeBeber){
    bebiAgua();
    contagem = 0;
  }
})

list.addEventListener("click", function(){
  document.getElementById("listElement").innerHTML = lista.join('<br />')
  ativeiBotao = true;
  document.getElementById("listElement").style.background = "rgba(221, 217, 195, 0.575)";
})

exit.addEventListener("click", function(){
  document.getElementById("listElement").innerHTML = "";
  ativeiBotao = false;
  document.getElementById("listElement").style.background = "none";
});

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

export function verificarPassouTempo(){
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
  // console.log("Hora(s): " + horas + " / Minuto(s): " + minutos);
};