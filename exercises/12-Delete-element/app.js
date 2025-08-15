let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below
const deletePerson = function(toDelete){
    let newArray = people.filter((person) => person !==toDelete)
    return newArray
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
