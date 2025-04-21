function bubbleSort(list){
    for(let i =0 ; i<list.length-1 ; i++){
        for(let j=0 ; j<list.length-1-i ; j++){
            if(list[j]>list[j+1]){
                [list[j], list[j+1]] = [list[j+1], list[j]] 
            }
        }
    }
    return list;
}
let list = [12,1,45,56,33,2,11,77,43]
console.log(bubbleSort(list))