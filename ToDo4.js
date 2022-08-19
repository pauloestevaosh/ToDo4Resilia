
import chalk from 'chalk';
import readline from 'readline-sync';


let i =0, continuar = "S", historias =[];

while (continuar=="S") {

    let quem=readline.question(chalk.bold.cyan('Quem?  :  ')),
    oQueDeseja =readline.question(chalk.bold.cyan('O que deseja?  :  ')),
    paraQue =readline.question(chalk.bold.cyan('Para que?  :  '));    

i =(`Como ${chalk.green(quem)}, eu desejo ${chalk.blue(oQueDeseja)}, para ${chalk.magenta(paraQue)}`)

continuar =readline.question('Se deseja escrever mais historias digite  "S" ')
continuar =continuar.toUpperCase()
historias.push(i) 

}
historias.forEach(element => { console.log(element)
    
});