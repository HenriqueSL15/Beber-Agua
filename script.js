const drankWater = document.getElementById("drankWater");
const list = document.getElementById("list");
const exit = document.getElementById("exit");
let currentDate = new Date();
const minutes = currentDate.getMinutes();

let vezes = 0;

function bebiAgua(){
  vezes += 1
  console.log(minutes)
}

drankWater.addEventListener("click", function(){
  bebiAgua();
})

list.addEventListener("click", function(){
  
})

exit.addEventListener("click", function(){
  
})
