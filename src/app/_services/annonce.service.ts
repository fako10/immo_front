import {Injectable} from "@angular/core";
import {AdresseModel} from "../_models/dto/adresse.model";
import {FormGroup} from "@angular/forms";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {concat, concatMap, Observable} from "rxjs";
import {GlobalConstants} from "../_common/global-constants";
import {AnnonceModel} from "../_models/dto/annonce.model";
import {AnnonceSearch} from "../_models/dto/AnnonceSearch.model";


const url = GlobalConstants.baseUrl;
const urlphoto = GlobalConstants.baseUrl + "saveannoncesFiles";
const search = GlobalConstants.baseUrl + "searchannnonces";
const urlCodeAnnonce = GlobalConstants.baseUrl + "searchannnoncecode";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http: HttpClient) {
  }

  saveAnnonce(annonce: AnnonceModel ) : Observable<any> {
    return this.http.post(url + 'saveannonce', annonce, { observe: 'response' });
  }

  addPhoto(id: number,files: File []): Observable<any> {
    let uploadImageData = new FormData();
    for (let valeur of files) {
      uploadImageData.append('imageFiles', valeur, valeur.name);
    }
    return this.http.post(`${urlphoto}/${id}`, uploadImageData, { observe: 'response' });
  }

  getAnnonces(annonceSaearch: AnnonceSearch, page: number, size: number) {

    let params = new HttpParams();
    params = params.append('page',page);
    params = params.append('size',size);
    return this.http.post(`${search}`,annonceSaearch,{params: params});
  }

  getAnnonce(codeAnnonce : string) :  Observable<any> {

    return this.http.get(`${urlCodeAnnonce}/${codeAnnonce}`);

  }

}
