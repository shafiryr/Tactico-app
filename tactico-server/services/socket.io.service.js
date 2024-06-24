let io;

function create(server) {
    io = require('socket.io')(server, {
        cors: {
            origins: ['http://localhost:4200']
        }
    });
    io.on('connection', (socket) => {
        console.info(`Client connected [id=${socket.id}]`);

        socket.on('disconnect', () => {
            console.info(`Client disconnected [id=${socket.id}]`);
        });
    });
}

module.exports = {
    create
}