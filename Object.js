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

{
// created an object with { b: 2 } as its prototype:
const myObject = Object.create({ b: 2 });
myObject.a = 1;

Object.defineProperty(myObject, 'c', {
    enumerable: false,
    value: 3
});

console.log(myObject.c); // logs: 3

// next for...in loop traverses all of the enumerable properties,
// including those in the prototype chain.
// Property c is skipped because it is not enumerable.
for (let propertyName in myObject) {
   console.log(propertyName + ": " + myObject[propertyName]);
}

// of only the enumerable own properties,
// so not of those in the prototype chain.
console.log(Object.keys(myObject)); // 
}
{
const person = {
    firstName: "John",
    lastName: "Doe", 
    get fullName() {  
      return `${this.firstName} ${this.lastName}`;
    }
  }
  console.log(person.fullName); 
  
  person.fullName = "Jane Roe"; 
  console.log(person.fullName); 
  
  person.fullName;
}

{
    const person = {
        get name() {
          return this._name;
        },
        set name(value) {
          value = value.trim();
          if (value === '') { return }  
          this._name = value;
        }  
      }
      
      console.log(person.name); 
      person.name = "Jonathan Dev"; 
      console.log(person.name); 
      
      person.name = " ";  // this will not work after trimming it will be empty string
      console.log(person.name); 
      
    //   person.name("John Doe"); will give error because it is not a function
}


//Deleting Properties

{
    const user = {
        first : "FirstName",
        last : "LastName"
    }
    const user1 = Object.create(user)
    user1.first = "Anik";
    user1.age = 22
    console.log(Object.getPrototypeOf(user1))    
}