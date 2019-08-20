var amqp = require('amqplib/callback_api');
const ENV = process.env.NODE_ENV === ('default' || 'dev' || 'prod') ? process.ENV.NODE_ENV : 'default';
const { envs } = require(__dirname + `/config/${ENV}.js`);

amqp.connect(`amqp://${envs.SERVER_USERNAME}:${envs.SERVER_PASSWORD}@${envs.SERVER_IP}`, function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'hello';

        channel.assertQueue(queue, {
            durable: false,
        });

        console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', queue);

        channel.consume(
            queue,
            function(msg) {
                console.log(' [x] Received %s', msg.content.toString());
            },
            {
                noAck: true,
            }
        );
    });
});
