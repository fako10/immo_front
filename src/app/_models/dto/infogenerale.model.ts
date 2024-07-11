import {FormControl, Validators} from "@angular/forms";

export class InfoGeneraleModel {

  nombrefacade?:        number;
  largeurfacade?:       number;
  surfaceTerrain?:      number;
  surfaceHabitable?:    number;
  nombreetage?:         number;
  anneeconstruction?:   number;
  etatBatiment?:        string;
  parking?:             boolean;
  nombreplaceparking?:  number;
  ascenseur?:           boolean;
  acceshandicape?:      boolean;


  constructor(
    nombrefacade:       number,
    largeurfacade:      number,
    surfaceterrain:     number,
    surfacehabitable:    number,
    nombreetage:        number,
    anneeconstruction:  number,
    etatBatiment:       string,
    parking:            boolean,
    nombreplaceparking: number,
    ascenseur:          boolean,
    acceshandicape:     boolean
  ) {
      this.nombrefacade = nombrefacade;
      this.largeurfacade = largeurfacade;
      this.surfaceTerrain = surfaceterrain;
      this.surfaceHabitable = surfacehabitable;
      this.nombreetage = nombreetage;
      this.anneeconstruction = anneeconstruction;
      this.etatBatiment = etatBatiment;
      this.parking = parking;
      this.nombreplaceparking = nombreplaceparking;
      this.ascenseur = ascenseur;
      this.acceshandicape = acceshandicape;
  }
}
