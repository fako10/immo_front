import {FormControl, Validators} from "@angular/forms";

export class InfobaseModel {
  typeTransaction?:     string;
  typeBien?:            string;
  soustypeBien?:        string;
  disponibilite?:       string;


  constructor(
    typeTransaction:    string,
    typeBien:           string,
    soustypeBien:       string,
    disponibilite:      string
  ) {
      this.typeTransaction = typeTransaction;
      this.typeBien = typeBien;
      this.soustypeBien = soustypeBien;
      this.disponibilite = disponibilite;
  }
}
