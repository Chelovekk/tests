const threads = require('worker_threads');

console.dir({ worker: threads });
threads.parentPort.postMessage('Data from worker');
threads.parentPort.on('message', data => {
    console.dir({ data });
});

process.exit(0);