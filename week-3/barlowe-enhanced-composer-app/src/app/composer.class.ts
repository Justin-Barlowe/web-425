// Name: Justin Barlowe
// File: composer.class.ts
// Description: Class file for the Composer class
// Date: 10/30/2023

// Import the IComposer interface
import { IComposer } from './composer.interface';

// Export the class
export class Composer {
  composers: Array<IComposer>;
  // Create an array of composers
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: 'Ludwig van Beethoven', genre: 'Classical'
      },
      {
        composerId: 101, fullName: 'Johann Sebastian Bach', genre: 'Baroque'
      },
      {
        composerId: 102, fullName: 'Wolfgang Amadeus Mozart', genre: 'Classical'
      },
      {
        composerId: 103, fullName: 'Franz Schubert', genre: 'Romantic'
      },
      {
        composerId: 104, fullName: 'George Frideric Handel', genre: 'Baroque'
      }
    ]
}

// Return the array of composers
getComposers() {
  return this.composers;
}

// Return the composer that matches the composerId
getComposer(composerId: number): IComposer | null {
  for (let composer of this.composers) {
    if (composer.composerId == composerId) {
      return composer;
    }
  }
  // Return null if no composer is found, typescript required due to strict null checks.
  return null;
}
}
