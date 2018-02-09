const http = require('http');
//FS = File System
const fs = require('fs');

// Lectura de archivo sincrona
//let file = fs.readFileSync("./index.html");

//Función flecha (Arrow Flecha)
//Se hizo en ECMAS6 para no escribir muchas veces la palabra flecha
http.createServer((request, response)=>{
  //Lectura Asincrona
  fs.readFile('./index1.html', (err, html)=>{
    if(err){
      //WriteHead Es la cabecera recive el codigo de estatus y el tipo de archivo
      response.writeHead(404, {'Content-Type':'text/html'});
      response.write("fallo");
      response.end();
    }else{
      response.write(html);
      response.end();
    }
  });
}).listen(3000);
/*
Función anónima
http.createServer(function(){});
*/

/*
let server = function(){};

http.createServer(server);


*/

/*
Polimorfismo
Es el como una serie de objetos hacen la misma acción de distinta forma
*/
