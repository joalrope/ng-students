import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { Pagination } from '../../interfaces/pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass'],
})
export class PaginationComponent implements OnChanges {
  @Input()
  items!: number;

  @Output()
  onChangePagination: EventEmitter<Pagination> = new EventEmitter<Pagination>();

  pages: number[] = [];
  currentPage: number = 1;
  limits: number[] = [5, 10, 20, 25];
  currentLimit: number = 5;

  constructor() {}

  prev() {
    this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : 1;
    this.onChangePagination.emit({ page: this.currentPage, limit: this.currentLimit });
  }

  next() {
    this.currentPage = this.currentPage < this.pages.length ? this.currentPage + 1 : this.pages.length;
    this.onChangePagination.emit({ page: this.currentPage, limit: this.currentLimit });
  }

  to(page: number) {
    this.currentPage = page;
    this.onChangePagination.emit({ page: this.currentPage, limit: this.currentLimit });
  }

  setLimit(limit: number) {
    this.currentLimit = limit;
    this.currentPage = 1;
    this.pages = [...Array(~~(this.items / this.currentLimit) + 1).keys()].map((x) => x + 1);
    this.onChangePagination.emit({ page: this.currentPage, limit: this.currentLimit });
  }

  ngOnChanges(changes: SimpleChanges) {
    const currentItems: SimpleChange = changes['items'];
    this.items = currentItems?.currentValue;
    this.pages = [...Array(~~(this.items / this.currentLimit) + 1).keys()].map((x) => x + 1);
  }
}
