//Convert number to Array
let no=2345;
let rem;
let arr=[];

while(no>0){
    rem=parseInt(no%10);
    arr.push(rem);
    no=parseInt(no/10);
}
arr.reverse();
document.write(arr);
