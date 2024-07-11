import {Injectable} from "@angular/core";
import {
  SousTypehabitationAppartement,
  SousTypehabitationBureau,
  SousTypehabitationCommerce,
  SousTypehabitationGarage,
  SousTypehabitationIndustrie,
  SousTypehabitationMaison,
  SousTypehabitationTerrain
} from "../_models/soustypehabitation.model";

@Injectable({
  providedIn: 'root'
})
export class MaisonTypeetSousTypeService {

  constructor() { }

  // @ts-ignore
  public getSousTypesHabitation(event: any): Array<string>  {
    if(event.target.value == "Maison") {
      return  Object.values(SousTypehabitationMaison);
    }
    else if(event.target.value == "Appartement") {
      return Object.values(SousTypehabitationAppartement);
    }

    else if(event.target.value == "Terrain") {
      return Object.values(SousTypehabitationTerrain);
    }
    else if(event.target.value == "Garage") {
      return Object.values(SousTypehabitationGarage);
    }
    else if(event.target.value == "Bureau") {
      return Object.values(SousTypehabitationBureau);
    }
    else if(event.target.value == "Industrie") {
      return Object.values(SousTypehabitationIndustrie);
    }
    else if(event.target.value == "Commerce") {
      return Object.values(SousTypehabitationCommerce);
    }
  }

}
