export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "thali" );
  }

  if (query.toLowerCase().includes("name")) {
    //TODO add your Andrew ID below
    //TODO update the corresponding test case in __tests__
    return ( "Talal" );
  }


// Handle addition queries dynamically
if (query.toLowerCase().startsWith("what is") && query.toLowerCase().includes("plus")) {
  const parts = query.toLowerCase().split(" ");
  const num1 = parseInt(parts[2], 10);
  const num2 = parseInt(parts[4], 10);
  return (num1 + num2).toString();
}

// Handle largest number queries dynamically
if (query.toLowerCase().startsWith("which of the following numbers is the largest")) {
  const matches = query.toLowerCase().match(/\d+/g); // Extract all numbers from the query
  if (matches) { // Ensure matches is not null
    const numbers = matches.map(Number); // Convert them to integers
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
  }
}

// Handle multiplication queries dynamically
if (query.toLowerCase().startsWith("what is") && query.toLowerCase().includes("multiplied by")) {
  const parts = query.toLowerCase().split(" ");
  const num1 = parseInt(parts[2], 10);
  const num2 = parseInt(parts[5], 10);
  return (num1 * num2).toString();
}

// Handle subtraction queries dynamically
if (query.toLowerCase().startsWith("what is") && query.toLowerCase().includes("minus")) {
  const parts = query.toLowerCase().split(" ");
  const num1 = parseInt(parts[2], 10);
  const num2 = parseInt(parts[4], 10);
  return (num1 - num2).toString();
}


// Helper function to determine if a number is prime
function isPrime(num: number): boolean {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Handle prime number queries dynamically
if (query.toLowerCase().startsWith("which of the following numbers are primes")) {
  const matches = query.toLowerCase().match(/\d+/g); // Extract all numbers from the query
  if (matches) { // Ensure matches is not null
    const primes = matches.map(Number).filter(isPrime); // Filter prime numbers
    return primes.join(", ");
  }
}

// Helper function to check if a number is a perfect square
function isPerfectSquare(num: number): boolean {
  const sqrt = Math.sqrt(num);
  return sqrt === Math.floor(sqrt);
}

// Helper function to check if a number is a perfect cube
function isPerfectCube(num: number): boolean {
  const cbrt = Math.cbrt(num);
  return cbrt === Math.floor(cbrt);
}


// Handle square and cube number queries dynamically
if (query.toLowerCase().startsWith("which of the following numbers is both a square and a cube")) {
  const matches = query.toLowerCase().match(/\d+/g);
  if (matches) {
    const squareAndCube = matches
      .map(Number)
      .filter(num => isPerfectSquare(num) && isPerfectCube(num));
    return squareAndCube.join(", ");
  }
}


  return "";
}
