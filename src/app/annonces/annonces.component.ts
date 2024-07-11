import {Component, OnInit} from '@angular/core';
import {AnnonceService} from "../_services/annonce.service";
import {AnnonceSearch} from "../_models/dto/AnnonceSearch.model";
import {Annoncelight} from "../_models/dto/annoncelight.model";

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.css']
})
export class AnnoncesComponent implements OnInit {

  annonces?: Annoncelight[];
  pageSize: number = 10;
  currentPageIndex = 0;
  pages: any;
  total_pages!: number;
  selectedItem: any;

  constructor(private annonceService: AnnonceService) {}

  // Initialization method executed when the component is loaded
  ngOnInit(): void {
    console.log('im in this.ngOnInit()');
    // Load devices list with initial settings
    this.reloadDevicesList(this.currentPageIndex, this.pageSize, true);
  }






  reloadDevicesList(offset: number, pageSize: number, editPages: boolean) {


    let commune = sessionStorage.getItem("commune");
    let typeBien = sessionStorage.getItem("typeBien");
    let prixMaximum = Number(sessionStorage.getItem("prixMaximum"));
    let typeTransaction = sessionStorage.getItem("typeTransaction");
    // @ts-ignore
    let search = new AnnonceSearch(typeTransaction, commune,prixMaximum, typeBien );

    if(typeBien == null || typeTransaction == null) {
      this.annonces = [];
    } else {
      if (!editPages) {
        // Load devices for the specified offset and page size

        this.annonceService
          .getAnnonces(search,offset, pageSize)
          .subscribe((res: any) => {
            this.annonces = res.content;
          });
      } else {
        console.log('im in reloadDevicesList()');
        // Load devices for the current page index and page size,
        // along with updating pagination data
        this.annonceService
          .getAnnonces(search,this.currentPageIndex, this.pageSize)
          .subscribe((res: any) => {
            this.annonces = res.content;
            this.total_pages = res.totalPages;
            this.pages = this.generateNumberList(this.total_pages);
          });
      }
    }

  }

  retrieveImage(file: File | undefined): any {
    console.log("file name " + file);
    return   'data:image/jpeg;base64,' + file;
  }

  // Generates an array of numbers from 1 to 'num'
  generateNumberList(num: number): number[] {
    const numberList: number[] = [];
    for (let i = 1; i <= num; i++) {
      numberList.push(i);
    }
    return numberList;
  }

  // Triggered when the selected item in the page size dropdown changes
  onSelectedItemChange(newSelectedItem: any) {
    console.log('im in onSelectedItemChange()');

    // Update page size and reload devices list
    this.pageSize = newSelectedItem;
    this.reloadDevicesList(this.currentPageIndex, this.pageSize, true);
    console.log('pagesize' + this.pageSize);
  }

  // Sets the current page index and reloads devices list accordingly
  setCurrentPage(index: number): void {
    this.currentPageIndex = index;
    this.reloadDevicesList(this.currentPageIndex, this.pageSize, false);
    console.log('pagesize' + this.pageSize);
  }

}
