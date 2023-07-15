function decimalToBinary(num) {
  if (num === 0) {
    return '0';
  }

  let binary = '';
  
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  
  return binary;
}

// Test cases
console.log(decimalToBinary(7));   // Output: 111
console.log(decimalToBinary(10));  // Output: 1010
console.log(decimalToBinary(33));  // Output: 100001

// Export the function for use in the browser environment
window.decimalToBinary = decimalToBinary;
