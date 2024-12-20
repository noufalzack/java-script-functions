
const sumOfEvens = (n) => {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
      sum += i;
    }
    return sum;
  };
  

  const userInput = prompt("Enter a value for n:");
  
 
  const n = parseInt(userInput, 10);
 
  if (isNaN(n) || n < 1) {
    alert("Please enter a valid positive integer.");
  } else {
   
    const result = sumOfEvens(n);
    alert("The sum of even numbers up to " + n + " is " +result);
  }