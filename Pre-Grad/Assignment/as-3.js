// Print Pyramid Pattern in JavaScript 

// var size = prompt("Enter the size of the pyramid");



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

printPyramidPattern(4);
