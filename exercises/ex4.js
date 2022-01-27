//Prints next 20 leap years
let n=parseInt(prompt("Please enter year"));
let arr=[];
while(arr.length<20){
    if(n%4==0 && n%100!=0 || n%400==0){
        arr.push(n);
    }
    n++;
}
document.write("Next 20 leap years:"+arr);
