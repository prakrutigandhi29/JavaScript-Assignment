//Removing Duplicates
let arr=[1,2,4,4,5,6,1];
let arr1=myfunc(arr);
document.write(arr1);
function myfunc(arr){
    let arr1=[];
    for(let i=0;i<arr.length;i++){
        if(!arr1.includes(arr[i])){
            arr1.push(arr[i]);
        }
    }
return arr1;
}
