(experimental)
# PM2-DEV-Refresh 
is a extension for [PM2](https://github.com/Unitech/pm2 "PM2") , The modern and stable CLI process manager for Node apps with native clusterization, monitoring, startup scripts and much more.
It will automatically refresh the browser after you save a file.


# Setup Client
Add the following code to your clientside template:

```JavaScript
 var socket = io.connect( 'http://localhost:3333');
     socket.on( 'refresh', function(){
        console.log('REFRESH!');
        window.location.reload();
     });  
```

# Usage

pm2 dev app.js


# Installation / Setup
Currently it is only working with my fork of PM2:
https://github.com/daslicht/pm2

Alternatively you could just modify your existing PM2 installation as the following:
https://github.com/daslicht/pm2/commit/c59411771334e53ac334abfc9ca3dc5fdfd9c856

The global installed PM2 resides in the following folder on OSX:
/usr/local/lib/node_modules/pm2
