class Node{
    constructor(data){
        this.data  = data;
        this.left  = null;
        this.right = null;
    }

}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    insert(data){
        
        let newNode = new Node(data);

        if(this.root === null){
            this.root = newNode;
        }
        else insertNode(this.root , newNode);
    }

       
    

    
}