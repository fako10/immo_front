import {FormControl, Validators} from "@angular/forms";


export class PrixModel {

  prixVente?:         number;
  revenuCadastre?:    number;
  tva?:               number;
  charges?:           number;
  prixMetreCarre?:    number;


  constructor(
    prixVente:        number,
    revenuCadastre:   number,
    tva:              number,
    charges:          number,
    prixMetreCarre:   number
  ) {
      this.prixVente = prixVente;
      this.revenuCadastre = revenuCadastre;
      this.tva = tva;
      this.charges = charges;
      this.prixMetreCarre = prixMetreCarre;
  }
}
