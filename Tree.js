class TreeNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);


console.log(root);


//BFS
function bfs(root){

    if(root==null) return;

    const queue = [root];
    while(queue.length){
        const item = queue.shift();
        console.log(item);

        if(item.left) queue.push(item.left)
        if(item.right) queue.push(item.right)
    }
    

}

bfs(root);

function bfs_arr(root){

    if(root==null) return;

    const queue = [root] ,ans = [];
    while(queue.length){
        let len = queue.length , level = [];
        for(let i = 0 ; i< len ; i++){
        const item = queue.shift();
        level.push(item);
        if(item.left) queue.push(item.left)
        if(item.right) queue.push(item.right)
    }
ans.push(level)
}
return ans;
}

console.log(bfs_arr(root))



//Preorder  root - > left - > right

function Preorder(root){
    if(root == null) return;

console.log(root.value);
if(root.left) Preorder(root.left);
if(root.right) Preorder(root.right);
}
console.error("Preorder");

Preorder(root);

//Preorder using stack

function Preorder_stack(root){
    if(root==null) return;
    let stack = [root];
    while(stack.length){
        const item = stack.pop();
    console.log(item.value);
    if(item.right) stack.push(item.right);
    if(item.left) stack.push(item.left);

    }
}

console.error("Preorder using stack");


Preorder_stack(root);
console.error("Inorder")

function inorder(root){
    if(root == null ) return;
    if(root.left) inorder(root.left);
    console.log(root.value);
    if(root.right) inorder(root.right)
}

inorder(root);

console.error("Inorder using stack");


function inorder_stack(root){
    let curr = root;
    const stack = [];
    while(stack.length || curr){
    while(curr){
        stack.push(curr);
        curr = curr.left;
    }
    let item = stack.pop();
    console.log(item.value);
    curr = item.right;    
    }
   
}
inorder_stack(root)


//Postorder
console.error("PostOrder");


function PostOrder(root){
    if(root === null) return;
    if(root.left) PostOrder(root.left);
    if(root.right) PostOrder(root.right);

    console.log(root.value);
}

PostOrder(root);

//Postorder iterative
function PostOrder_stack(root){
    if(root === null) return []
  
    const tempStack = [root], result = []
  
    while(tempStack.length){
        const last = tempStack.pop()
  
        result.push(last.value)
  
        if(last.left) tempStack.push(last.left)
        if(last.right) tempStack.push(last.right)
      }
  
      return result.reverse()
  }

  console.log(PostOrder_stack(root));
  