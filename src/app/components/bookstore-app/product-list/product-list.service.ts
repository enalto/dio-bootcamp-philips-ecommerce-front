import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Book } from './model/book.model';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private url = 'https://localhost:8080/api/bookstore';

  httpOptions = {
    Header: new HttpHeaders({ 'content-type': 'application/json' }),
  };
  constructor(private httpClient: HttpClient) {}

  getBooks(): Observable<Book[]> {
    //return this.httpClient.get<Book[]>(this.url);
    let book0: Book = new Book('0', 'book0', 10, 5, 'action', 'url');

    let book1: Book = new Book('1', 'book1', 10, 5, 'action', 'url');
    let book2: Book = new Book('2', 'book2', 10, 5, 'action', 'url');
    let book3: Book = new Book('3', 'book3', 10, 5, 'action', 'url');
    let book4: Book = new Book('4', 'book4', 10, 5, 'action', 'url');
    let book5: Book = new Book('5', 'book5', 10, 5, 'action', 'url');
    let book6: Book = new Book('6', 'book6', 10, 5, 'action', 'url');

    return of([book0, book1, book2, book3, book4, book5, book6]);
  }
}
