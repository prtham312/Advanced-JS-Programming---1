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