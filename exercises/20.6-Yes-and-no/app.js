let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here

let newArray = theBools.map(function (item){
  if(item===1) return 'wiki'
  else if(item===0) return 'woko'
})
console.log(newArray)
