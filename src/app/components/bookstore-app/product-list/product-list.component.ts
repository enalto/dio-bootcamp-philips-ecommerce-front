import { Book } from './model/book.model';
import { ProductListService } from './product-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  books: Book[] = [];

  constructor(private productListService: ProductListService) {}

  ngOnInit(): void {
    this.productListService.getBooks().subscribe((books) => {
      this.books = books;
      console.log(books);
    });
  }
}
