//Checking if hexadecimal or not
let no="0x123f";
let pattern=/^0x[0-9a-f]+$/;
if(no.match(pattern)){
    document.write("true");
}
else
    document.write("false");