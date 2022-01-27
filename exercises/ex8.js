//Finds largest element
let arr=[3,4,9,0,6,4];
let max=arr[0];
myfunc(arr);

function myfunc(arr){
    for(let i=0;i<arr.length;i++){
        if(max<arr[i])
            max=arr[i];
    }
    document.write("Largest element:"+max);
};