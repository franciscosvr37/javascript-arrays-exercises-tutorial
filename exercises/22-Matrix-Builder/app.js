// Your code here
function matrixBuilder(int){
let newMatrix=[]
    for(let i=0; i<int; i++){
        let fila=[]
        for(let j=0; j<int; j++){
          let aleatorio = Math.floor(Math.random() + 0.5);
          fila.push(aleatorio)
        }
        newMatrix.push(fila)
    }
    return newMatrix
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
