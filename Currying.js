//Normal function

function add(a,b,c) {
    return a+b+c;
}
console.log(add(2,3,4))


//Curry Function

const addCurry = a => b => c => a+b+c;
console.log(addCurry(2)(3)(5))


{
const add = a => b => c => a + b + c;
const add5 = add(2)(3); //this will not print here anything as it is expecting a value here
console.log(add5(10)); }