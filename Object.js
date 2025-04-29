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
