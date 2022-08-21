const threads = require('worker_threads');
const { Worker } = threads;

console.log(__dirname);
const worker = new Worker(__dirname + '/worker.js', { workerData: 'Hello from master' });

worker.on('message', (...args) => {
    console.log('args: ', args)
})
worker.on('error', err => {
    console.log('error: ', err)
})
worker.on('exit', code => {
    console.log('exit code: ', code)
})

// setTimeout(async ()=>{
//     const data = await worker.terminate()
//     console.dir({ data })
// }, 1000);