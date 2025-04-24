class HashTable{
    constructor(){
        this.table = new Array(127);
        this.size = 0
    }


    _hash(key){
        let hash = 0;
        for(let i =0 ; i<key.length ; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;
    }

    set(key,value){
        const index = this._hash(key);
        this.table = [key,value];
        this.size++;
    }

    get(key){
        const index = this._hash(key);
        return this.table[index];
    }
    
    remove(key){
        const index = this._hash(key);
        if(this.table[index] && this.table.length){
            this.table[index] = undefined;
            this.size--;
            return true;
        }
        else return false;
    }


}


const ht = new HashTable();
ht.set("Anik" , 270);
ht.set("Diwas" , 108);
ht.set("Ojasva" , 312)