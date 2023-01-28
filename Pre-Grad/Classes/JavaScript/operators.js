
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



