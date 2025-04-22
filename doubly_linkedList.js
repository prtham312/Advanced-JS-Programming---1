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

    Delete_node(data){
        if(!this.head) return false;
        let current = this.head;
        while(current){
            if(current.data === data){
                if(current === this.head && current === this.tail ){
                    this.head =  null;
                    this.tail = null;
                }
                else if(current === this.head){
                    this.head = current.next;
                    this.head.prev = null;
                  
                }
                else if(current === this.tail){
                    this.tail = current.prev;
                    this.tail.next = null;
                }
                else{
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.length--;
                return true;
            }
            current = current.next;
        }
        return false;
    }

    traverseForward() {  //traverse forward
        let current = this.head;
        while (current) {
          console.log(current.data);
          current = current.next;
        }
      } 

      traverseBackward() {  //traverse backwards
        let current = this.tail;
        while (current) {
          console.log(current.data);
          current = current.prev;
        }
      } 

      search(data) {
        let current = this.head;
        let idx = 0;
        while (current) {
          if (current.data === data) {
            return idx;
          }
          current = current.next;
          idx++;
        }
        return -1;
      }

}

const ll = new doublyLinkedList();
ll.insert(8);
ll.insert(9);
ll.insert(10);
ll.insert(11);
ll.insert_end(12);
ll.insert_end(13);
ll.insert_end(14);
ll.insert_end(15);
