export class AnnonceSearch {

  typeTransaction?:       string;
  communeOuCodePostal?:   string;
  prixMin?:               number;
  prixMax?:               number;
  typeHabitation?:        string;
  sousTypeHabitation?:    string;
  surfaceMinTerrain?:     number;
  surfaceMaxTerrain?:     number;
  surfaceMinHabitable?:   number;
  surfaceMaxHabitable?:   number;
  nbrMinChambre?:         number;
  nbrMaxChambre?:         number;
  accessibleHandicape?:   number;
  anneeConstruction?:     number;
  classeEnergetique?:     number;


  constructor(
    typeTransaction :             string,
    communeOuCodePostal :         string,
    prixMax:                      number,
    typeHabitation:               string
  ) {
    this.typeTransaction = typeTransaction;
    this.communeOuCodePostal = communeOuCodePostal;
    this.prixMax = prixMax;
    this.typeHabitation = typeHabitation;

  }


}
