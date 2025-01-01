# Unexpected Behavior with null values in TypeScript Functions

This repository demonstrates an uncommon bug in TypeScript related to the handling of null values in function calls.  The bug occurs because TypeScript's type system doesn't always correctly track potential null values when passing arguments to functions, leading to unexpected behavior if not carefully handled.

## The Bug
The `greet` function is designed to handle optional names (accepting `string | null`). However,  the null checks may not be sufficient to prevent runtime errors, especially with dynamically changing variable values.

## How to Reproduce
1. Clone the repository.
2. Compile and run `bug.ts`. Observe the output.
3. Examine `bugSolution.ts` to see how to address the issue.

## Solution
The solution involves more robust null checks or using TypeScript's optional chaining and nullish coalescing operators to handle potential null values more gracefully.