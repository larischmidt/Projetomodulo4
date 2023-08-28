import readline from "readline-sync";

const propriedadesCss = [];

function comandosPrompt(){
        let entrada = (readline.question('Qual a propriedade Css desejada? ou digite "SAIR" para encerrar: ')).toUpperCase();
        if (entrada === 'SAIR'){
    propriedadesCss.sort().forEach((propriedadesCss)=>{
        console.log(propriedadesCss)
    })
    }else{
        propriedadesCss.push(entrada)
        comandosPrompt()
    }
}
    comandosPrompt();
