//ler arquivos externos usando node
//vamos usar a lib fs (File System)

const fs = require('fs');
fs.readFile('./dados.csv', (erro, data)=>{

    if(erro){
        console.log(erro);
    }
    else
    {
        console.log(data.toString());
    }


});



