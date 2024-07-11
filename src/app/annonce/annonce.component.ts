import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent {

  @Input() currentPageIndex = 0;
  // 3- page size
  @Input() pageSize: number = 1;
  // 4- number of pages
  @Input() total_pages!: number;
  // 5- pages list
  @Input() pages: any;
  // 6- selected item
  selectedItem: any;

  @Output() selectedItemChange = new EventEmitter<number>();
  @Output() changeCurrentIndex = new EventEmitter<number>();

  // on previous button click
  previousOffset() {
    if (this.currentPageIndex > 0) this.currentPageIndex--;
    this.changeCurrentIndex.emit(this.currentPageIndex);
  } // on next button click
  nextOffset() {
    if (this.currentPageIndex < this.pages.length! - 1) this.currentPageIndex++;
    this.changeCurrentIndex.emit(this.currentPageIndex);
  }
  // on page size select input  change
  onItemsPerPageChange(): void {
    this.currentPageIndex = 0;
    this.selectedItemChange.emit(this.selectedItem);
    this.changeCurrentIndex.emit(0);
    console.log(this.selectedItem);
    this.pageSize = this.selectedItem;
  }

  // on one of page number [1,2,3,4] change
  setCurrentPage(index: number): void {
    this.currentPageIndex = index;
    this.changeCurrentIndex.emit(index);
  } // function to generate number list from numeric value
  generateNumberList(num: number): number[] {
    const numberList: number[] = [];
    for (let i = 1; i <= num; i++) {
      numberList.push(i);
    }
    return numberList;
  }




}
