// Name: Justin Barlowe
// File: composer-list.component.ts
// Description: TypeScript file for the composer list component
// Date: 10/24/2023

import { Component } from '@angular/core';

// Define the Composer class
export class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

// Component declaration.
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})


export class ComposerListComponent {
  // Create an array of composers
  composers: Array<Composer>;
  // Constructor with instance of composers
  constructor() {
    this.composers = [
      new Composer('Ludwig van Beethoven', 'Classical'),
      new Composer('Johann Sebastian Bach', 'Baroque'),
      new Composer('Wolfgang Amadeus Mozart', 'Classical'),
      new Composer('Franz Schubert', 'Romantic'),
      new Composer('George Frideric Handel', 'Baroque')
    ];
  }
}
