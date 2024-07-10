//Recursion lecture
function factorial(n) { 
    // Base case: if n is 0 or 1, return 1 
    if (n === 0 || n === 1) { 
        return 1; 
    } 
    
    // Recursive case: if n is greater than 1, call the function with n-1 and multiply by n 
    else { 
        return n * factorial(n - 1); 
    } 
    } 
    
    // Call the factorial function and print the result 
    const result = factorial(10); 
    console.log(result); // Output: 120
    