  import { pegarMinutos } from './utils.js';
  import { pegarHoras } from './utils.js';

  let worker = new Worker('timeWorker.js');
  let lastCounterValue = 0;
  let minutos = 0;
  let horas = 0;

  // Listen for messages from the worker
  worker.onmessage = function (event) {
    // Do something with the counter value in the main thread
    let counterValue = event.data;
    if(counterValue - lastCounterValue === 60){
      lastCounterValue+=60;
      minutos+=1;
      pegarMinutos(minutos);
    }

    if(minutos == 60){
      minutos = 0;
      horas+=1;
      pegarHoras(horas);
    }
  };