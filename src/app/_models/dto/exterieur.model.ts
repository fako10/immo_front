import {FormControl} from "@angular/forms";

export class ExterieurModel {

  id?:                    number;
  idAnnonce?:             number;
  jardin?:                boolean;
  superficieJardin?:      number;
  superficieTerrain?:     number;
  piscine?:               boolean;
  superficiePiscine?:     number;
  terrasse?:              boolean;
  superficieTerrasse?:    number;
  vueSurMer?:             boolean;


  constructor(
    jardin:             boolean,
    superficieJardin:   number,
    piscine:            boolean,
    superficiePiscine:  number,
    terrasse:           boolean,
    superficieTerrasse: number,
    vueSurMer:          boolean
  ) {
      this.jardin = jardin;
      this.superficieJardin = superficieJardin;
      this.piscine = piscine;
      this.superficiePiscine = superficiePiscine;
      this.terrasse = terrasse;
      this.superficieTerrasse = superficieTerrasse;
      this.vueSurMer = vueSurMer;
  }
}
