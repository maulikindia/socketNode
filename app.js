let express = require('express');
let a = express();
let server = require('http').Server(a);
let io = require('socket.io')(server);


a.get('/', async (req, res) => {
    // await myFunc();
    await newFunc();

    res.sendFile(__dirname + '/index.html');
});



async function myFunc() {
    io.on('connection', async (socket) => {

        console.log('connected');

        socket.on('disconnect', async () => {
            console.log('disconnected');
        });
    });
}



let myArr = [];

async function newFunc() {
    io.sockets.on('connection', async (socket, data) => {
        myArr.push(socket.id);
        data = "maulik"
        console.log(data + " " + 'is' + " " + 'connected');
        console.log(socket.length + " " + 'Online users');
        socket.on('disconnect', async () => {
            console.log(data + " " + 'is' + " " + 'disconnected');

        });
    });
}

let arr = [
    {
        "name": "maulik",
        "email": "myemail@gmial.com"
    },
    {
        "name": "dharmesh",
        "email": "myg@gmail.com"
    }
]

a.get('/mydata', async (req, res) => {
    await newFunc();

    if (arr) {
        return res.json({ 'data': arr });

    }
    else {
        res.json({ msg: 'null array' });
    }
});




server.listen(6589, async (err) => {

    if (err) {
        return console.error(err);
    }
    return console.log('SERVER IS RUNNING..');
});