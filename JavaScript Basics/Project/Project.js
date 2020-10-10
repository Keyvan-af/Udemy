var firstName = prompt("First Name:")
var lastName = prompt("Last Name:")
var age = prompt("How old are u?")
var height = prompt("What's your height?")
var petName = prompt("What's your pet name?")
alert("Thank u for information!")


var nameCond = null ;
var ageCond = null ;
var heightCond = null ;
var petCond = null ;

if (firstName[0] === lastName[0]) {
    nameCond = true;
}else {
    nameCond = false;
}


if (age > 20 && age < 30){
    ageCond = true;
}else {
    ageCond = false;
}


if (height >= 170){
    heightCond = true ;
}else {
    heightCond = false ;
}


if (petName[petName.length-1] === "y"){
    petCond = true ;
}else{
    petCond = false ;
}

if (nameCond && ageCond && heightCond && petCond){
    console.log(firstName)
    console.log("Welcome to Fsociety")
}else{
    console.log("What are U doing here!?")
}