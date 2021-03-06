const amqp = require('amqplib/callback_api');
const ENV = process.env.NODE_ENV === ('default' || 'dev' || 'prod') ? process.env.NODE_ENV : 'default';
const { envs } = require(__dirname + `/config/${ENV}.js`);

amqp.connect(`amqp://${envs.SERVER_IP}`, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }
        var queue = 'hello';
        var msg = 'Hello world';

        channel.assertQueue(queue, {
            durable: false,
        });

        channel.sendToQueue(queue, Buffer.from(msg));
        console.log(' [x] Sent %s', msg);
    });
    setTimeout(() => {
        connection.close();
        process.exit(0);
    }, envs.CONNECT_TIMEOUT);
});
