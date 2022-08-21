const threads = require('worker_threads');
const { Worker } = threads;

if(threads.isMainThread){
    console.dir({ worker: threads });
    const worker = new Worker(__filename, { workerData: 'Text' });
    worker.on('message', (...args) => {
        console.log('args: ', args);
    });
    worker.on('error', error => {
        console.log('error', error);
    })
    worker.on('exit', code => {
        console.log('code', code);
    })
}else{
    console.dir({ worker: threads });
    threads.parentPort.postMessage('Hello');
    setTimeout(()=>{
        const data = { text: 'Worker message' };
        threads.parentPort.postMessage(data);
    }, 1000)
}