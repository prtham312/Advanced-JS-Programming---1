class Node{
    constructor(data){
        this.next = null;
        this.data = data;
    }
}
class linkedList{
    constructor(head){
        this.head = null;
    }
    
    
    
    //appending a data in linkedList
    append(data){
        const newNode = new Node(data);
        if(!this.head){
             this.head = newNode;
        }
        else{
            let current = this.head 
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
    }
    }

    //Prepend data in linkedList
    prepend(data){
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }


    delete(data){ //first occurence only
        if(!this.head) return;
        if(this.head.data===data){
            this.head = this.head.next;
            return;
        }
        else{
            let current = this.head;
            while(current.next && current.next.data !== data){
                current = current.next;
            }
            if(current.next) current.next = current.next.next;
        }
    }


    //searching a node present in linkedList
    search(data){
        if(!this.head) return;
        let current = this.head;
        while(current){
            if(current.data === data) return true;
            current = current.next;
        }
        return false;
    }


    //Display elements in linkedList
    print(){
        let current = this.head;
        let dis = [];
        while(current){
            dis.push(current.data);
            current=current.next;
        }
        console.log(dis.join(' -> '))
    }

}


let ll = new linkedList();
ll.append(2);
ll.append(3);
ll.append(1);
ll.append(2);
ll.append(6);
ll.append(7);
ll.append(6);
ll.append(1);
ll.append(4);
ll.prepend(9);
ll.prepend(8);
ll.print();
ll.delete(1);
ll.delete(6);
ll.print();