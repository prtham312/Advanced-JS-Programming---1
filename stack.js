class Stack{
 constructor(){
    this.items = [] 
 }

 push(data){
    this.items.push(data);
 }

 pop(){
    if(this.items.length === 0) return "Oops Stack Overflowed"
    this.items.pop();
 }

 peek(){
    return console.log(this.items[this.items.length-1])
 }


 isEmpty(){
    return console.log(this.items.length === 0);
}

size(){
    return console.log(this.items.length);
}

print(){
    this.items.forEach(item => console.log(item))
}

}

let stack = new Stack();
stack.push(3);
stack.push(6);
stack.push(1);
stack.push(8);
stack.push(9);
stack.pop();
stack.peek();
stack.isEmpty();
stack.size();
stack.print()
