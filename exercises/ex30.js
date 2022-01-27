//Sum of first 100 prime numbers
let arr=[],no=2,sum=0;
while(arr.length<100){
    if(isPrime(no)){
        arr.push(no);
        sum=sum+no;
    }
    no++;
}
document.write(sum);
function isPrime(n){
    let flag=0;
    for(let i=2;i<n;i++){
        if(n%i==0){
            flag=1;
            break;
        }
    }
    if(flag!=1){
        return true;
    }
    else
        return false;
}
