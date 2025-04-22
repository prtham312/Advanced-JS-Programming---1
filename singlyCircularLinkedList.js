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


//Delete a node in singly CLL
delete(data){
    if(!this.head) return false;
    else if(this.head===data){
        if(size===1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.tail.next = this.head;
          }
          this.size--;
          return true;
        }
        let current = this.head;
        let prev = null;
        do {
          if (current.next.data === data) {
            if (current.next === this.tail) {
              this.tail = current;
            }
            current.next = current.next.next;
            this.size--;
            return true;
          }
          current = current.next;
        } while (current !== this.head);
        return false; // Node not found
      }

      traverse() {
        if (!this.head) return;
        let current = this.head;
        do {
          console.log(current.data);
          current = current.next;
        } while (current !== this.head);
    }

}