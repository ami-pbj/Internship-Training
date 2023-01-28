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



// Operators

// + - / * %

// Types of Operators

// Arithmetic Operators => [ +, -, /, *, % ]
console.log(10/2);
console.log(10%2);

// Assignment Operators => [ = ]
let p = 10;
console.log(p);

// Comparison Operators => [ >=, <=, !=, ==, === ]
// they return true or false 

console.log(2<=3);
console.log(2!=2);

console.log(2=='2') // check for values only 
console.log(2==='2') // check for value + data type 

// Logical Operators => [ && => AND, || => OR, ! => NOT]
// [ && => AND ]
console.log(2<=3 && 3<=4); // true
console.log(2>=3 && 3<=4); // false

// [ || => OR ]
console.log(2>=3 || 3<=4); // true

// [ ! => NOT ]
console.log(2!=3); // true


// Conditional Operators => if-else
if (2>3) {
    // do something
    console.log("Hello !!");
} else {
    // do other thing
    console.log("Bye !!")
}

// to remove this if-else, we use conditional operators or ternary operators 
// conditional ? if work : else work 


// Type Operators => tells you about the type of a variable => typeof
let num = 10;
console.log(typeof(num));

// Data Type of JavaScript => w3school
// String, Number, Bigint(large number), Boolean(true or false), Undefined, Symbol, Object( key value pair => {key:'value'}), Array(block of memory holding different data type)

