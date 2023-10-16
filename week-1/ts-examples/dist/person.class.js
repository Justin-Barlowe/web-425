"use strict";
// Name: Justin Barlowe
// File: person.interface.ts
// Description: Class that uses the IPerson interface
// Date: 10/16/2023
Object.defineProperty(exports, "__esModule", { value: true });
// Create class
class Person {
    // Create constructor
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
// Create instance of class
let myName = new Person("Justin", "Barlowe");
// Print to console
console.log(`My name is ${myName.firstName} ${myName.lastName}`);
