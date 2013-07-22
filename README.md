

Add the following code to your clientside template:

```JavaScript
 var socket = io.connect( 'http://localhost:3333');
     socket.on( 'refresh', function(){
        console.log('REFRESH!');
        window.location.reload();
     });  
```
