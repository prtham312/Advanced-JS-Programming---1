class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class singlyCircularLinkedList{
    constructor(){
        this.head = null;
        this.tail - null;
        this.size = 0;
    }
insert_start(data){
    const newNode = new Node(data)
    if(!this.head){
        this.head = newNode;
        this.tail = newNode;
        newNode.next = this.head;
    }else{
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = this.head;
    }
    this.size++;
}

insert_end(data){
    const newNode = node(data);
    if(!this.head){
        this.tail = newNode;
        this.head = newNode;
        newNode.next = this.head;
    }else{
        this.tail.next = newNode;
        newNode.next = this.head;
        this.tail = newNode;
    }
    size++;
}


}