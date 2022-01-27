//Finding nth largest element from array
let arr=[1,4,0,2,3,6,5];
let n=prompt("Please enter value of n");
if(n>arr.length){
    alert("n is greater than array's length.")
}
/*Not sorting this array making outer loop
 run till nth index only.*/
for(let i=0;i<n;i++) 
{
    for(let j=i+1;j<arr.length-1;j++)
    {
        if(arr[j]>arr[j+1])
        {
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
document.write(arr[arr.length-n]);
