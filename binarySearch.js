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
return -1;
}

{
let list  = [1,2,3,4,5,6,7,8,9];
let ele = 2;
console.log(Search(list , ele))
}


{
    // let array be unsorted
    let list = [1 , 24 ,44 ,34 ,41 , 98 , 93 , 12 , 14 , 78];
        list = list.sort((a,b) => a-b)
    let ele = 25
    console.log(Search(list , ele))
    console.log(list)
}