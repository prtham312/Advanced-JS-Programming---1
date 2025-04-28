class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(data){
        this.items.push(data);
    }
    dequeue(){
        return this.items.shift()
    }
   
    isEmpty(){
        return this.items.length === 0
    }
}

class Graph{
    constructor(noOfVertices){
        this.noOfVertices = noOfVertices;
        this.adjList = new Map();
    }
    addVertex(v){
        this.adjList.set(v , []);
    }
    
    addEdge(v,w){
        this.adjList.get(v).push(w)
        this.adjList.get(w).push(v)
    }

    printGraph(){
        let get_keys = this.adjList.keys();

        for(let i of get_keys){
            let get_values = this.adjList.get(i);
            let res = "";

            for(let j of get_values){
                res += j + " " 
            }
            console.log(i + "->" + res)
        }

    }

    bfsGraph(start){
        let visited = [];
        let q = new Queue();
        visited[start] = true;
        q.enqueue(start);

        while(!q.isEmpty()){
            let getElement = q.dequeue();

            console.log(getElement);
            let list =  this.adjList.get(getElement);

            for(let i in list){
                let neighbour = list[i];

                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    q.enqueue(neighbour)
                }
            }

        }

    }

}

let gr = new Graph();
gr.addVertex(2);
gr.addVertex(4);
gr.addVertex(6);
gr.addEdge(2,4);
gr.addEdge(4,6);
gr.addEdge(6,2);
gr.printGraph()
gr.bfsGraph(2)


