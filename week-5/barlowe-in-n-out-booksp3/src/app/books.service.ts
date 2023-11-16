// Name: Justin Barlowe
// File: books.service.ts
// Description: Service file for the in-n-out books application.
// Date: 11/16/2023


// Imports
import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


// Injectable
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books!: Array<IBook>;

  // Books Array of Objects
  constructor() {
   this.books = [
      {
          "isbn": "978-0143124177",
          "title": "The Goldfinch",
          "description": "A young New Yorker grieving his mother's death is pulled into a gritty underworld of art and wealth.",
          "numOfPages": 784,
          "authors": ["Donna Tartt"]
      },
      {
          "isbn": "978-0307473479",
          "title": "Thinking, Fast and Slow",
          "description": "Daniel Kahneman demonstrates how we can tap into the two systems that drive the way we think.",
          "numOfPages": 499,
          "authors": ["Daniel Kahneman"]
      },
      {
          "isbn": "978-0452284241",
          "title": "The Kite Runner",
          "description": "An unforgettable novel about friendship, betrayal, and redemption in Afghanistan.",
          "numOfPages": 371,
          "authors": ["Khaled Hosseini"]
      },
      {
          "isbn": "978-0316769488",
          "title": "The Catcher in the Rye",
          "description": "J.D. Salinger's classic novel of teenage angst and rebellion.",
          "numOfPages": 234,
          "authors": ["J.D. Salinger"]
      },
      {
          "isbn": "978-0062316097",
          "title": "To Kill a Mockingbird",
          "description": "Harper Lee's classic novel of a young girl in the Deep South who is thrust into a world of racial injustice.",
          "numOfPages": 336,
          "authors": ["Harper Lee"]
      },
  ]

   }

  // Get books
  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  // Get book
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
