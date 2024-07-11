export class AdresseModel {

  id?:            number;
  pays?:          string;
  villeFr?:       string;
  villeNL?:       string;
  codepostal?:    string;
  communeFR?:     string;
  communeNL?:     string;
  rueFr?:         string;
  rueNL?:         string;
  numero?:        string;
  boite?:         string;

  constructor(
    id :             number,
    pays :           string,
    villeFr:         string,
    villeNl:         string,
    codepostal:      string,
    communeFR:       string,
    communeNL:       string,
    rueFr:           string,
    rueNl:           string,
    numero:          string,
    boite:           string,
  ) {
      this.id = id;
      this.pays = pays;
      this.villeFr = villeFr;
      this.villeNL = villeNl;
      this.codepostal = codepostal;
      this.communeFR = communeFR;
      this.communeNL = communeNL;
      this.rueFr = rueFr;
      this.rueNL = rueNl
  }
}
