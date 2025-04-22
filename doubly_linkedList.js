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

    insert_position(data , position){
        const newNode = new Node(data);
        if(position<0 || position>this.length) return false;
        if(position === 0){
            this.insert(data);
            return true;
        }
        if(position === this.length){
            this.insert_end(data);
            return true;
        }
        let current = this.head;
        for(let i = 0 ; i<position-1 ; i++){
           current = current.next;
        }
        newNode.prev = current;
        newNode.next = current.next;
        current.next.prev = newNode;
        current.next = newNode;
        this.length++;
        return true;
    }

}