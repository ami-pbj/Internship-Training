console.log(document)

var a = 10; // Changeable Values and can be redeclare
let ba = 20; // Changeable Values and can't be redeclare
const c = 30; // Immutable (Non Changeable) Values and must be initialize at the time of declaration

console.log(a,ba,c)



let d = 20;
if (true) {
    let e = 10;
    console.log(d);
    console.log(e);
// Block
}
console.log(d);


var x = 100;
console.log(x);

if (true) {
    var x = 10;
    console.log(x);
}
console.log(x);

var y = 1000;
function abc() {
    var y = 100;
    if (true) {
        let y = 20;
        console.log(y, "Y");
    }
    console.log(y, "Y0")
}
abc();
console.log(y, "Y00")



const arr = ["A", "B", "C"];
arr.push("D")
console.log(arr);

