import {FormControl} from "@angular/forms";

export class CertificationPebModel {

  id?:                        number;
  idAnnonce?:                 number;
  typeChauffage?:             string;
  classeEnergetique?:         string;
  numeroReferenceCPEB?:       string;
  consommationPEB?:           number;
  emissionPEB?:               number;
  descriptionPebFR?:          string;
  descriptionPebNL?:          string;
  descriptionPebEN?:          string;
  conformiteELectrique?:      boolean;
  conformiteMazout?:          boolean;
  pompeChaleur?:              boolean;
  panneauxSolaire?:           boolean;
  panneauxPhotovoltaique?:    boolean;
  doubleVitrage?:             boolean;
  tripleVitrage?:             boolean;
  chauffeEauCommun?:          boolean;
  climatisation?:             boolean;


  constructor(
    classeEnergetique:        string,
    numeroReferenceCPEB:      string,
    consommationPEB:          number,
    emissionPEB:              number,
    descriptionPebFR:         string,
    descriptionPebNL:         string,
    descriptionPebEN:         string
  ) {
      this.classeEnergetique = classeEnergetique;
      this.numeroReferenceCPEB = numeroReferenceCPEB;
      this.consommationPEB = consommationPEB;
      this.emissionPEB = emissionPEB;
      this.descriptionPebFR = descriptionPebFR;
      this.descriptionPebNL = descriptionPebNL;
      this.descriptionPebEN = descriptionPebEN;
  }
}
