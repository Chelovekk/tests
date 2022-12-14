const threads = require('worker_threads');
const { Worker } = threads;

const buffer = new SharedArrayBuffer(1024);

const worker = new Worker('./access+.js', { workerData: { buffer } });

setInterval(()=>{
    console.dir(buffer);
}, 100)

process.on('SIGTERM', () => {
    worker.terminate(() => {
        console.log('WP');
    })
})