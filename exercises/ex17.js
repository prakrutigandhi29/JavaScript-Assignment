//Removing duplicate elements 
let arr=[3,4,9,0,4,3];
let arr1=[];
for(let i=0;i<arr.length;i++){
    if(!arr1.includes(arr[i])){
        arr1.push(arr[i]);
    }
}
document.write(arr1);