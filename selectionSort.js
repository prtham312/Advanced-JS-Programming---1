function selectionSort(arr){
    for(let i=0 ; i<arr.length-1 ; i++){
        let min_idx = i
        for(let j = i+1 ; j<arr.length ; j++){
            if(arr[j]<arr[min_idx]){
                min_idx = j
            }
        }
        if(min_idx !== i){
            [arr[i]  , arr[min_idx]] = [arr[min_idx] , arr[i]]
        }
    }
    return list;
}
let list = [12,14,11,65,33,62,13,90,63,32];
console.log(selectionSort(list));