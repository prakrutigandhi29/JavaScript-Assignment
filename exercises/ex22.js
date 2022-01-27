//Largest element from Array
let arr=[];
for(let i=0;i<5;i++)
{
    let n=prompt("Enter number-"+i+":");
    arr.push(n);
}
document.write(Math.max(...arr));
