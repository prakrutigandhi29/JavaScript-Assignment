//Merging alternate elements
let arr=['z','c','a'];
let arr1=[1,2,3];
let arr2=[];
for(let i=0;i<arr.length;i++){
    arr2.push(arr[i]);
    arr2.push(arr1[i]);
}
document.write(arr2);

