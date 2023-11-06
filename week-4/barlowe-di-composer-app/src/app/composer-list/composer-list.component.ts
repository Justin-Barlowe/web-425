// Name: Justin Barlowe
// File: composer-list.component.ts
// Description: TypeScript file for the composer list component
// Date: 10/30/2023


// Imports
import { Component } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

// Export the ComposerListComponent class
export class ComposerListComponent {
  composers: Array<IComposer>;

  // Constructor with instance of composers
  constructor( private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }
}
