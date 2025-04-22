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

    insert_start(data){ //inserting a data in DLL at starting position
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
            this.insert_start(data);
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
        let arr = [];
        let current = this.head;
        while (current) {
          arr.push(current.data);
          current = current.next;
        }
        return arr.join(' <-> ')
      } 

      traverseBackward() {  //traverse backwards
        let current = this.tail;
        let arr= []
        while (current) {
          arr.push(current.data)
          current = current.prev;
        }
        
        return arr.join(' <-> ')
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
ll.insert_start(8);
ll.insert_start(9);
ll.insert_start(10);
ll.insert_start(11);
ll.insert_end(12);
ll.insert_end(13);
ll.insert_end(14);
ll.insert_end(15);
ll.insert_position(11,4);
ll.insert_position(12,6);
ll.insert_position(13,8);
console.log(ll.traverseForward());
ll.Delete_node(11);
ll.Delete_node(12);
ll.Delete_node(13);
console.log(ll.traverseForward());
console.log(ll.search(15));
console.log(ll.search(11));

