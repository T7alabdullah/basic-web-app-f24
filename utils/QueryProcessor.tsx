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

  return "";
}
