function Search(list , ele){
    let size = list.length;
    let start = 0;
    let end = size-1;
    return binarySearch(list , ele , start , end);
}
function binarySearch(list , ele , start , end){
    while(start<=end){
    let n = Math.floor((start+end)/2);
    if(ele == list[n]) return n;
    else if(ele < list[n]){
        return binarySearch(list , ele , start , n-1)
    }
    else if(ele>list[n])  return binarySearch(list ,ele , n+1 , end)
    }
}
let list  = [1,2,3,4,5,6,7,8,9];
let ele = 2;
console.log(Search(list , ele))