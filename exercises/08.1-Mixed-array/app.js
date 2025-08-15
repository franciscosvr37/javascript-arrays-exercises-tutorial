let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let newArray=[]
for(let i = 0; i<=mix.length-1; i++){
    let typeData= typeof(mix[i])
    newArray.push(typeData)
}
console.log(newArray)