# TypeScript Type Assertion Bug
This repository demonstrates a common type assertion bug in TypeScript.

## Bug Description
The code attempts to check if a variable is a string using `typeof data === 'string'`. However, the type checker still reports an error because TypeScript's type system doesn't fully understand that the `if` statement narrows the type.