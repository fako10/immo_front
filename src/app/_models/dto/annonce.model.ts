import {AdresseModel} from "./adresse.model";
import {CertificationPebModel} from "./certificationpeb.model";
import {ExterieurModel} from "./exterieur.model";
import {InfobaseModel} from "./Infobase.model";
import {InfoGeneraleModel} from "./infogenerale.model";
import {InterieurModel} from "./interieur.model";
import {PrixModel} from "./prix.model";
import {TitreetDescriptionModel} from "./titreetdescription.model";
import {PhotoModel} from "./photo.model";

export class AnnonceModel {

  id?:                        number;
  codeAnnonce?:               string;
  adresse?:                   AdresseModel;
  certificationPeb?:          CertificationPebModel;
  exterieur?:                 ExterieurModel;
  infobase?:                  InfobaseModel;
  infogenerale?:              InfoGeneraleModel;
  interieur?:                 InterieurModel;
  prix?:                      PrixModel;
  titreetdescription?:        TitreetDescriptionModel;
  photos : PhotoModel [] = [];


  constructor(
    adresse:                AdresseModel,
    codeAnnonce:            string,
    certificationPeb:       CertificationPebModel,
    exterieur:              ExterieurModel,
    infobase:               InfobaseModel,
    infogenerale:           InfoGeneraleModel,
    interieur:              InterieurModel,
    prix:                   PrixModel,
    titreetdescription:     TitreetDescriptionModel
  ) {
      this.adresse = adresse;
      this.codeAnnonce = codeAnnonce;
      this.certificationPeb = certificationPeb;
      this.exterieur = exterieur;
      this.infobase = infobase;
      this.infogenerale = infogenerale;
      this.interieur = interieur;
      this.prix = prix;
      this.titreetdescription = titreetdescription;
  }
}
