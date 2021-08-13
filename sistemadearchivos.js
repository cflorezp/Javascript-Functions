"estas instrucciones cuentan las lineas que contiene un archivo ejecuntado el siguiente comando node sistemadearchivos.js [nombre_del_archivo]"


const fs = require("fs");
const file = process.argv[2];

if(!file){
    throw new Error("Indica el archivo que quieres leer como segundo argumento");
}

const content = fs.readFile(file, function(err, content){
    if(err){
        return console.log(err);
    }
    const lineas = content.toString().split("\n").length;
    console.log("numero de lienas: ", lineas);
})
