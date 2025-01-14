### Description
Project utilizes Haproxy as a reverse and as a loadbalancer to divide the load among its services.
<br />
<br />
Some points to note:
<br />
1. Reverse proxy sits infront of servers and client request to the proxy which requests to the servers and delivers the response
2. Load balancer divides the load among multiple instances, ensuring no single instance is overloaded.
3. Project uses Haproxy as a Layer 7 load balancer, which is http mode.

There are three apps Reader, Writer and Admin and proxy forwards the request on the following conditions
1. Forward to Reader if url begins with /reader
2. Forward to Writer if url begins with /writer
3. Forward to Admin if url begins with /admin
4. By default it routes to Reader
<br />
Rules can be seen in ``` haprxy/haproxy.cfg ```


### Setup
Project uses docker and docker-compose, you can run the project with following command

``` docker-compose up --build ```
<br />
<br />
