let list = [1,2,56,3,22,88,9,11,23,87,23,65,24]
let ele = 11;
function linear_search(list, ele){
for(let i in list){
    if(list[i]==ele)
        return i;
}}
console.log(linear_search(list,ele))