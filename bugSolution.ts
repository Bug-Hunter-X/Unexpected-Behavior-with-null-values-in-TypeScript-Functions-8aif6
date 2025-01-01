function greet(name: string | null): string {
  // Use optional chaining and nullish coalescing
  const nameToGreet = name ?? "world";
  return `Hello, ${nameToGreet}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("John")); // Output: Hello, John!

let userName: string | null = null;
userName = "John Doe";
console.log(greet(userName)); // Output: Hello, John Doe!

userName = null;
console.log(greet(userName)); // Output: Hello, world!
//The solution uses optional chaining and nullish coalescing to ensure that null values are correctly handled and unexpected behavior is avoided.