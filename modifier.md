# Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.

# Access Modifiers in TypeScript OOP

## Introduction

Access Modifiers are used in TypeScript to control access to class properties and methods. They help us protect data and manage how we use class members. TypeScript has three main access modifiers: `public`, `private`, and `protected`. It also has `readonly` to prevent changing a property after initialization.

## Detailed Body

### 1. Public

`public` means we can access a property or method from anywhere. It is the default access modifier in TypeScript.

```ts
class User {
  public name = "Hasan";
}

const user = new User();
console.log(user.name);
```

### 2. Private

`private` means we can access a property only inside its own class. We cannot access it directly from outside the class.

```ts
class User {
  private password = "12345";
}
```

### 3. Protected

`protected` means we can access a property inside its own class and its child classes. We cannot access it directly from outside.

```ts
class Person {
  protected age = 25;
}

class Student extends Person {
  showAge() {
    console.log(this.age);
  }
}
```

### 4. Readonly

`readonly` means we can assign a value only during declaration or inside the constructor. After that, we cannot change its value.

```ts
class User {
  readonly id = 101;
}
```

## Conclusion

Access Modifiers help us control access to class properties and methods. We use `public` for general access, `private` for class-only access, `protected` for parent and child classes, and `readonly` when a value should not change after initialization.
