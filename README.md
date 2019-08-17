# Simple Amqp Server 

### Build amqp docker server 
``` docker-compose up ```

### open console in browser
``` http://localhost:15672 ```

``` username = root ``` 
``` password = root ```

### start server 
``` yarn dev ```

### receive server 
``` yarn cli ```

## clean volume
``` docker volume ls -q | grep rabbitmq ```

``` docker volume rm {simple-nodejs-amqp_rabbitmqstats_data} ``` 