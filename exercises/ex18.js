//Merging and duplicate removing elements
let arr1=[1,2,3,4,4,5];
let arr2=[5,5,6,7,8];

arr2=arr2.concat(arr1); //merge
document.write(arr2+"<br>");
let rmduplicate=[];
for(let i=0;i<arr2.length;i++){
    if(!rmduplicate.includes(arr2[i])) {
        rmduplicate.push(arr2[i]);
    }
}
document.write(rmduplicate);