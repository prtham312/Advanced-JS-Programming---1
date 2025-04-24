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
    return this.items[this.items.length-1]
 }


 isEmpty(){
    return this.items.length === 0;
}

}