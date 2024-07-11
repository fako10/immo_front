import {Injectable} from "@angular/core";
import {CommuneModel} from "../_models/commune.model";
import {AdresseModel} from "../_models/dto/adresse.model";


@Injectable({
  providedIn: 'root'
})
export class AdresseService {

   adresses: AdresseModel[] = [

    { id:1,  codepostal: "1070",communeFR:"anderlect", communeNL:"anderlect", rueFr: "rue de la démocratie", rueNL: "democratiestraat"  },

    { id:2, codepostal: "9300",communeFR:"alost", communeNL:"aalst", rueFr: "petrus van nuffelstraat", rueNL: "petrus van nuffelstraat" },

    { id:3, codepostal: "9300",communeFR:"alost", communeNL:"aalst", rueFr: "binnenstraat", rueNL: "binnenstraat" },

     { id:4, codepostal: "1000",communeFR:"bruxelles", communeNL:"brussels", rueFr: "rue de la senne", rueNL: "sennestraat" },


     { id:5, codepostal: "1070",communeFR:"anderlect", communeNL:"anderlect", rueFr: "chaussée de mons", rueNL: "monstraat" },

     { id:6, codepostal: "1080",communeFR:"Molenbeek-Saint-Jean", communeNL:"Molenbeek-Saint-Jean", rueFr: "prince de Liege", rueNL: "prince de Liege" },

  ];

   communes : CommuneModel[] =   [

    { id:1,  codepostal: "1070",communeFR:"anderlect", communeNL:"anderlect"  },

    { id:2, codepostal: "9300",communeFR:"alost", communeNL:"aalst" },

    { id:4, codepostal: "1000",communeFR:"bruxelles", communeNL:"brussels" },

    { id:6, codepostal: "1080",communeFR:"Molenbeek-Saint-Jean", communeNL:"Molenbeek-Saint-Jean" },

  ];

  getAll(): AdresseModel[] {
    return this.adresses;
  }
  // @ts-ignore
  getAllCodePostal() : CommuneModel[] {

    return this.communes;

  }

}
