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

    insertNode(node , newNode){
        if(node.date > newNode.data){ //left subtree as it's value is less than parent node
            if(node.left === null) node.left = newNode;

            else this.insertNode(node.left ,  newNode)
        }

        else{
            if(node.right === null) node.right = newNode;
            else this.insertNode(node.right , newNode)
        }

    }
    

    
}