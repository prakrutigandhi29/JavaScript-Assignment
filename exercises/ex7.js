//Exchanging first and last letters of a string
let str=prompt("Enter a string");
let strnew=str.charAt(str.length-1)+str.substring(1,str.length-1)+str.charAt(0);
document.write("String after exchanging first and last character:"+strnew);