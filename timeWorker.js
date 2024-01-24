let counterObject = {counter:0}

function startLoop() {
  setInterval(() => {
    // Increment the counter and post the result back to the main thread
    counterObject.counter++;
    // console.log('TimerWorker.js:' + counterObject.counter)
    postMessage(counterObject.counter);
  }, 1000); // Update counter every second
}

startLoop();