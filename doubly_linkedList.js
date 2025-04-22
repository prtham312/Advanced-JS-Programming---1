class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(data){ //inserting a data in DLL at starting position
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;  
        }
        this.length++;
    }
    
    insert_end(data){
        const newNode = new Node(data);
        if(!this.tail){
            this.head = this.tail = newNode;
        }
        else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode 
        }
        this.length++;
    }

}