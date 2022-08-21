const http = require('http');

const server = http.createServer((req, res) => {
});

server.on('request', (req, res)=>{
    const body = [];
    req.on('data', chunk=>{
        body.push(chunk);
    }).on('end', ()=>{
        console.log(body.toString())
    })
})
server.on('')

server.listen(3000);