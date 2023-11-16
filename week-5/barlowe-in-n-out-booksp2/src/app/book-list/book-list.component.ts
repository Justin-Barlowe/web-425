// Name: Justin Barlowe
// File: book-list.component.ts
// Description: Book list component for the in-n-out books application.
// Date: 11/16/2023

// Imports
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

// Component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

// Book list component
export class BookListComponent {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook | null = null;

  // Constructor
  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }
  // showBookDetails and console log the book
  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}
