const net = require('net');


const blockList = new net.BlockList();
console.log(blockList, typeof blockList)
const server = net.createServer(/*socket=>{*/
    // socket.on('data', data=>{
    //     const method = data.toString().split('\n')[0].split(' ')[0];
    //     console.log(method);
    //     if(method === 'GET'){
    //         socket.write('HTTP/1.1 200 OK\n\nhallo world');
    //         console.log(socket.localPort)
    //         console.log(socket.remoteAddress)
    //         console.log(socket.remotePort)
    //         socket.end()
    //     } else if(method === 'POST'){
    //         console.log(data.toString());
    //         const indexOfStartBody = data.toString().indexOf('{');
    //         const bodyString = data.slice(indexOfStartBody);
    //         const body = JSON.parse(bodyString);
    //         console.log(body)
    //         socket.write('HTTP/1.1 200 OK\n\nhi');
    //         socket.end();
    //     }
    // })
/*}*/)

server.listen(3000);

console.log(server.address())
server.on("connection", (socket)=>{
    socket.on('data', data=>{
        console.log('All data', data);
        const method = data.toString().split('\n')[0].split(' ')[0];
        console.log('Method', method, 'end method');
        if(method === 'GET'){
            socket.write('HTTP/1.1 200 OK\n\nhallo world');
            console.log(socket.localPort)
            console.log(socket.remoteAddress)
            console.log(socket.remotePort)
            socket.end()
        } else if(method === 'POST'){
            console.log(data.toString());
            const indexOfStartBody = data.toString().indexOf('{');
            const bodyString = data.slice(indexOfStartBody);
            const body = JSON.parse(bodyString);
            console.log(body)
            socket.write('HTTP/1.1 200 OK\n\nhi');
            socket.end();
        }
    })
})