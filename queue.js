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
    isEmpty(){
        return console.log(this.items.size === 0)
    }
}

let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
