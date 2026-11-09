# What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

## Introduction

In TypeScript, we use `type` and `interface` to define the structure of data. Both help us define the types of properties in an object. They also help us write clean and reusable code. But they have some differences.

## Detailed Body

### 1. Type Alias

We use `type` to create a custom type. It can define object types, union types, primitive types, and tuples.

Example:

type User = {
name: string;
age: number;
};

const user: User = {
name: "Hasan",
age: 25
};

### 2. Interface

We use `interface` mainly to define the structure of an object. It tells us which properties an object should have.

Example:

interface User {
name: string;
age: number;
}

const user: User = {
name: "Hasan",
age: 25
};

## Conclusion

Both `type` and `interface` are useful in TypeScript. They have some differences, but both help us write better code. We can choose one based on our needs.
