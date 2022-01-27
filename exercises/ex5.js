//Print years when sunday comes on 1st Jan between 2014-2050 
let arr=[];
for(let i=2014;i<2050;i++){
    let d=new Date(i,0,1).getDay();
    if(d==0){
        arr.push(i);
    }
}
document.write(arr);

