function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("John")); // Output: Hello, John!

//Unexpected behavior when using a variable with a potential null value
let userName: string | null = null;
userName = "John Doe";
console.log(greet(userName)); // Output: Hello, John Doe!

userName = null;
console.log(greet(userName)); // Output: Hello, world!

//The issue is that TypeScript's type system doesn't fully track the potential null values across function calls. It handles null values but can be easily confused by function calls and variable assignment
//This can lead to unexpected behavior if null values aren't carefully handled, particularly when dealing with optional parameters or variables that might be null or undefined.