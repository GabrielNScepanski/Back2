const fs=require("fs");
let log="mensagem login"
fs.writeFilesync("./logs.log",log{flag: "a+"});
fs.writeFilesync("./log2.log",log,(erro)=>{
    if(erro){
        console.log(erro)

    }
})

console.log("fim");


fs.rnSync("./logs2.log");

console.log("removendo arquivo com rmSync")
fs.unlinkSynk(".log.log");
console.log("removido arquivo usando unlinkSync")