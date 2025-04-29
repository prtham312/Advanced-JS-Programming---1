const bird = {}
bird.name = "HummingBird" //dot notation property add
bird["canFly"] = true;
Object.defineProperty(bird , 'live' , {
    value : 25 ,
    writable : true,
    configurable : true ,
    enumerable : true
})
console.log(bird.live)


//Chaining
a = {
    b : function(){
        return {c : {d : 52}}
    }
}
console.log(a.b().c.d)
//chaining throughout the objects to get a desired value

// Optional Chaining
//if the property or method is not defined 
// it won't give error instead it will log undefined

myProp = {};
console.log(myProp.method?.()) //it will log undefined
console.log(myProp?.a)

/* Using nullish coalescing along with for better handling errors in objects while accessing wrong */
function User(user){
    const userName = user?.name??"Name not available at current moment";
    return userName
}
let undef;
console.log(User(undef))
console.log(User(3))
console.log(User()) // In all three Name not Available

console.log(User({
    name : "Anik"
}))


//Due to properties it will log the value but own't modify the property
const myObject = {};

Object.defineProperty(myObject, 'someProperty', {
  value: 313
});

console.log(myObject.someProperty = 314); // logs: 314

const descriptor = Object.getOwnPropertyDescriptor(myObject, 'someProperty');
console.log(descriptor);