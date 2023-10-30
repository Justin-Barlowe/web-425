// Name: Justin Barlowe
// File: my-details.component.ts
// Description: Details component file.
// Date: 10/23/2023


import { Component } from '@angular/core';

// Typescript person class.
export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keywords = [
    '#TypeScript', '#2023', '#CodingWithAngular', '#ngOmaha'
  ];

  // Person class constructor.
  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

// MyDetailsComponent class.
export class MyDetailsComponent {
  myProfile: Person;
  constructor() {
    this.myProfile = new Person("Justin Barlowe", "Mexican", "Green");
}
}
