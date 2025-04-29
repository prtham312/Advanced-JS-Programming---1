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


//optional chaining
a = {
    b : function(){
        return {c : {d : 52}}
    }
}
console.log(a.b().c.d)
//chaining throughout the objects to get a desired value