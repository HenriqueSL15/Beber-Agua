  import { pegarMinutos } from './utils.js';
  import { pegarHoras } from './utils.js';
  import { pegarSegundos } from './utils.js';

  let worker = new Worker('timeWorker.js');
  let antesMinutos = 0;
  let minutos = 0;
  let horas = 0;
  let segundos = 0;

  // Listen for messages from the worker
  worker.onmessage = function (event) {
    // Do something with the counter value in the main thread
    // let counterValue = event.data;
    segundos+=1;

    if(segundos > 59){
      segundos = 0;
      minutos+=1; 
    }
    pegarMinutos(minutos);
    pegarSegundos(segundos);
    if(minutos == 60){
      antesMinutos = 0;
      horas+=1;
      pegarHoras(horas);
    }
  };