import {InfodebaseModel} from "./infodebase.model";
import {AdresseModel} from "./adresse.model";
import {PrixModel} from "./prix.model";

export class AnnonceModel {

  informationBase?: InfodebaseModel;
  adresse?: AdresseModel;
  prix?: PrixModel;
  amount?:number;

}
