module.exports = {
    envs: {
        SERVER_IP: process.env.RABBITMQ_HOST || '127.0.0.1',
        SERVER_USERNAME: 'root',
        SERVER_PASSWORD: 'root',
        CONNECT_TIMEOUT: 1500,
    },
};
