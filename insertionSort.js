function insertionSort(arr){
    for(i = 0 ; i<=arr.length-1 ; i++){
        j=i;
        while(j>0 && arr[j-1]>arr[j]){
            let temp = arr[j-1];
            arr[j-1]=arr[j];
            arr[j]=temp;
            j--;
        }
    }
    return arr;
}
let list = [12,1,45,56,33,2,11,77,43]
console.log(insertionSort(list))