class Queue{
    constructor(){
        this.items = [];
    }
    push(data){
        this.items.push(data);
    }
    pop(){
        this.items.shift()
    }
    peek(){
        return console.log(this.items[0])
    }
    size(){
        return console.log(this.items.length) 
    }
}