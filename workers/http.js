const threads = require('worker_threads');
const http = require('http');
const port = 3000;

threads.parentPort.postMessage({ name: 'Started', port });

const routes = {
    '/': async (req, res) => { return { status: res.statusCode } },
    '/api/test': async (req, res) => { return { status: res.statusCode } },
}

const types ={
    object: JSON.stringify,
    string: data => data,
    number: data => data.toString(),
    undefined: () => 'empty',
}

http.createServer(async (req, res) => {
    const handler = routes[req.url];

    if(!handler){
        res.end('Handler not exist');
        return;
    }
    const data  = await handler(req,res);
    const type = typeof data;
    const serializer = types[type];
    const result = serializer(data);
    res.end(result);
}).listen(port);