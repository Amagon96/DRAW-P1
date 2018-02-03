const http = require('http');

/*
Función anónima
http.createServer(function(){});
*/

/*
let server = function(){

};

http.createServer(server);
*/

/*
Polimorfismo
Es el como una serie de objetos hacen la misma acción de distinta forma
*/

//Función flecha (Arrow Flecha)
//Se hizo en ECMAS6 para no escribir muchas veces la palabra flecha
http.createServer((request, response)=>{
  response.write('Hola Mundo!!!');
  response.end();
}).listen(3000);
