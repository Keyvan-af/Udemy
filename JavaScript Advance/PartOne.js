function timesFive(numInput) {
    //Local scope to the function!
    var result = numInput * 5
    return result
}

//Global Scope
var v = "Global V"
var stuff = "Global stuff"

function fun(stuff) {
    console.log(v);
    stuff = "reassign stuff inside func"
    console.log(stuff);
}

