import {Component, OnInit} from '@angular/core';
import {LanguageService} from "../_services/_language/language.service";
import {TranslateService} from "@ngx-translate/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdresseService} from "../_services/adresse.service";
import {AdresseModel} from "../_models/dto/adresse.model";
import {CommuneModel} from "../_models/commune.model";
import {Typehabitation} from "../_models/typehabitation.model";
import {TypeTransaction} from "../_models/typetransaction.model";
import {AnnonceSearch} from "../_models/dto/AnnonceSearch.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  title = 'angular-multilingue';
  valeur= '';
  adresses: AdresseModel[] = [];
  strAdresses: CommuneModel[] = [];
  public typesHabitations = Object.values(Typehabitation);
  public typesTransactions = Object.values(TypeTransaction);
  submitted: any = false;
  constructor(languageService : LanguageService,
              private translate : TranslateService,
              private adresseService: AdresseService,
              private router: Router) {
  }

  multistep = new FormGroup({
    search : new FormGroup({
      typeTransaction: new FormControl("", [Validators.required]),
      commune: new FormControl(""),
      typeBien: new FormControl(""),
      prixMaximum: new FormControl(null, [Validators.min(0), Validators.pattern("^[0-9]*$")]),

    })
  });

  sendTranslatedvalue() {
    return this.translate.get('popup_text', {item_name : this.title})
  }

  ngOnInit(): void {
    this.adresses =  this.adresseService.getAll();
    this.strAdresses = this.adresseService.getAllCodePostal();
    this.sendTranslatedvalue().subscribe(
      data=> {
        this.valeur = data;
      });
  }

  get search() {
    return this.multistep.controls['search']['controls'];
  }

  submit() {
    let commune =  this.search.commune.value == null ? "" : this.search.commune.value;
    let typeBien = this.search.typeBien.value == null ? "" : this.search.typeBien.value;
    let prixMaximum = this.search.prixMaximum.value == null ? 0 : this.search.prixMaximum.value;
    let typeTransaction = this.search.typeTransaction.value ==  null? "" : this.search.typeTransaction.value;

    let search = new AnnonceSearch(typeTransaction,commune, prixMaximum, typeBien );

    console.log("type de bien component " + typeBien);
    console.log("prix max component  " + prixMaximum);

    // @ts-ignore
    sessionStorage.setItem("annonceSearch", search);

    sessionStorage.setItem("commune", commune);
    sessionStorage.setItem("typeBien ", typeBien);
    sessionStorage.setItem("prixMaximum", prixMaximum.toString());
    sessionStorage.setItem("typeTransaction", typeTransaction);



    this.router.navigateByUrl(`annonces`)
  }


}

