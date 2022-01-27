//Check string is palindrome or not
let str="mom";
let str1="";
for(let i=str.length-1;i>=0;i--)
{
    str1+=(str.charAt(i));
}
if(str1==str){
    document.write(str+" is Palindrome");
}
else
document.write(str+" is not Palindrome");