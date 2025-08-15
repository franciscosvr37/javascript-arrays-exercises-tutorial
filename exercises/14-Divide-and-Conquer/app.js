let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
const mergeTwoList = (elements) =>{
    let odd=[]
    let even=[]
  elements.forEach(item =>{
     typeNumber=item%2
     if(typeNumber===0){
        even.push(item)
     }else{
        odd.push(item)
     }
  })
  return odd.concat(even)
}
console.log(mergeTwoList(listOfNumbers))