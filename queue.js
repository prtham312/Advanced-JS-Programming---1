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

}