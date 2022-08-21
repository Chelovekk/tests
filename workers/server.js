const threads = require('worker_threads');
const { Worker } = threads;

const worker  = new Worker(__dirname + '/http.js');

worker.on('message',  msg => {
    console.log(msg)
    if(msg.name === 'Started') console.log(`Server started on port ${msg.port}`);
})
process.on("SIGTERM", async () => {
    worker.terminate((data)=>{
        console.log('Server stopped');
        console.dir({ data });
    });
})