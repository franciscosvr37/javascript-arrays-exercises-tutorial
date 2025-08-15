let i = 20;

do {
    // Magic goes here
   let valor = i%5
    let concatenado=''
    let toPrint=''
    if(valor===0){
        concatenado='!'
    }
    toPrint=i+concatenado
    if(i===0){
        toPrint='LIFTOFF'
    }
    console.log(toPrint)
    
    
    i--;
} while (i >= 0);
