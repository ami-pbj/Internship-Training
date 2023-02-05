// Print Pyramid Pattern in JavaScript 

// var size = prompt("Enter the size of the pyramid");


// row or column count
let n = 5;
// defining an empty string
let printPattern = "";

for(let i = 0; i < n; i++) {
    // external loop
    for(let j = 0; j < n; j++) {
        // internal loop
        printPattern += "* ";
    }
    // newline after each row
    printPattern += "\n";
}
// printing the string
console.log(printPattern);


// print pyramid pattern
let rows = 5;
let printPyramid = "";
// External loop
for (let i = 1; i <= rows; i++) {
  // printing spaces
  for (let j = 1; j <= rows - i; j++) {
    printPyramid += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    printPyramid += "*";
  }
  printPyramid += "\n";
}
console.log(printPyramid);


// print pyramid pattern using function 
function printPyramidPattern(n) { 
    // Input the number of rows
    for (var i = 1; i <= n; i++) {
        var s = "   ";
        // For every each counter there exist 2*n-1 value
        for (var j = 1; j <= (2 * n - 1); j++) {
          // Check the workbook image
            (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " ";   
        }
        console.log(s);
    }
}

printPyramidPattern(5);

