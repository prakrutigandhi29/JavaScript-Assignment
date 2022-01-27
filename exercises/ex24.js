//Counting vowels from String
let str="hello";
let cnt=0;
for(let i=0;i<str.length;i++){
    if(str.charAt(i)=='e'|| str.charAt(i)=='o'||str.charAt(i)=='u'||str.charAt(i)=='i'|| str.charAt(i)=='a'){
        cnt++;
    }
}
document.write(cnt);

