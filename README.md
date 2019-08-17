# Simple Amqp Server 

### Build amqp docker server 
``` docker-compose up ```
### start server 
``` yarn dev ```

## clean volume
``` docker volume ls -q | grep rabbitmq ```

``` docker volume rm {simple-nodejs-amqp_rabbitmqstats_data} ``` 