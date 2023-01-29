// JS Function => Block of code that performs a specific task.

// Report Card => Print the name of 4 different places
// print("Name of Student") and Add it to 4 different places
// Make this task as a function printName(){ // code here }, printName("Name of Student")

// Syntax
function functionName(){
    // code here
    console.log("Inside Function")
}

console.log("Here on 18")
function addTwoNum(num1, num2) {
    let sum = num1 + num2;
    console.log(sum)
} // declaration of the function
console.log("Here on 23")

// Use a function / call a function
addTwoNum(10, 20);

// Self invoking function means => Executed as soon as declared
(function selfInvokingFunction() {
    // code here
    console.log("Inside 31")
})