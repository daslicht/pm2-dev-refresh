
PM2-DEV-Refresh is a extension for [an example](https://github.com/Unitech/pm2 "PM2") , The modern and stable CLI process manager for Node apps with native clusterization, monitoring, startup scripts and much more.



# Setup Client
Add the following code to your clientside template:

```JavaScript
 var socket = io.connect( 'http://localhost:3333');
     socket.on( 'refresh', function(){
        console.log('REFRESH!');
        window.location.reload();
     });  
```
