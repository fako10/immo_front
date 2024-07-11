import {FormControl} from "@angular/forms";

export class TitreetDescriptionModel {

    titreFr?:           string;
    descriptionFr?:     string;
    titreNl?:           string;
    descriptionNl?:     string;
    titreEn?:           string;
    descriptionEn?:     string;



  constructor(
    titreFr:          string,
    descriptionFr:    string,
    titreNl:          string,
    descriptionNl:    string,
    titreEn:          string,
    descriptionEn:    string
  ) {
      this.titreFr = titreFr;
      this.descriptionFr = descriptionFr;
      this.titreNl = titreNl;
      this.descriptionNl = descriptionNl;
      this.titreEn = titreEn;
      this.descriptionEn = descriptionEn;
  }
}
