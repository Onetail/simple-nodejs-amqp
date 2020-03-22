# Simple Amqp Server 

## Quick start

### Build amqp docker server 
``` docker-compose up ```

### open console in browser
``` http://localhost:15672 ```

``` username = root ``` 
``` password = root ```

### start server 
``` yarn dev:js ```

### receive server 
``` yarn cli ```

## use webpack
> build a dist to add compiler speed faster

``` yarn build ```

> open another terminal 

``` yarn dev ```

## clean volume
``` docker volume ls -q | grep rabbitmq ```

``` docker volume rm {simple-nodejs-amqp_rabbitmqstats_data} ``` 