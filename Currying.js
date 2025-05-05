//Normal function

function add(a,b,c) {
    return a+b+c;
}
console.log(add(2,3,4))


//Curry Function

const addCurry = a => b => c => a+b+c;
console.log(addCurry(2)(3)(5))