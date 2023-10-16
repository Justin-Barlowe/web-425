// Name: Justin Barlowe
// File: person.interface.ts
// Description: Class that uses the IPerson interface
// Date: 10/16/2023

// Import from the IPerson interface
import { IPerson } from "./person.interface";

// Create class
class Person implements IPerson {
    firstName: string; 
    lastName: string;

    // Create constructor
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Create instance of class
let myName = new Person("Justin", "Barlowe");

// Print to console
console.log(`My name is ${myName.firstName} ${myName.lastName}`)