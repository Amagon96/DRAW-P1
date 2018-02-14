const http = require('http');
//FS = File System
const fs = require('fs');
//log4js
const log4js = require('log4js');

const logger = log4js.getLogger();

logger.level = "debug";

// Lectura de archivo sincrona
//let file = fs.readFileSync("./index.html");

//Función flecha (Arrow Flecha)
//Se hizo en ECMAS6 para no escribir muchas veces la palabra flecha
http.createServer((request, response)=>{
  //Lectura Asincrona
  fs.readFile('./index.html', (err, suc)=>{
    logger.info("Conexión con servidor");
    if(err){
      logger.warn("404");
      //WriteHead Es la cabecera recive el codigo de estatus y el tipo de archivo
      response.writeHead(404, {
        'Content-Type':'text/html'
      });
      response.write("404 - Not Found!!");
      response.end();
    }else{
      logger.info("Exito");
      response.write(suc);
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
