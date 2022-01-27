//Checking if alphanumeric or not
let boolean=alpha_numeric();
document.write("isAlphanumeric:"+boolean);
function alpha_numeric(){
let str="abc123";
let pattern=/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/;
    if(str.match(pattern)){
        return true;
    }
    else
        return false;
}
