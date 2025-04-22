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


}


