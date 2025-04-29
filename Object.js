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