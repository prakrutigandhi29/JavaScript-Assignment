//Destructuring
let Person={
    firstName:"Prakruti",
    lastName:"Gandhi"
};
displayObject(Person);

function displayObject(Person){
    let {firstName:fname}=Person;
    let {lastName:lname}=Person;
    document.write(fname+" "+lname);
}