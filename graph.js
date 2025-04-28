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

}


