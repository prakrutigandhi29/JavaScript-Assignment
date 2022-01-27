//Removing duplicate letter from String
let str="helllooo";
let unique='';
for(let i=0;i<str.length;i++){
    if(!unique.includes(str.charAt(i))){
        unique+=str.charAt(i);
    }
}
document.write(unique);
