import { Component } from '@angular/core';
import {LanguageService} from "../_services/_language/language.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  title = 'angular-multilingue';
  valeur= '';

  constructor(languageService :  LanguageService,
              private translate : TranslateService) {
  }

  sendTranslatedvalue() {
    return this.translate.get('popup_text', {item_name : this.title})
  }

  ngOnInit(): void {
    this.sendTranslatedvalue().subscribe(
      data=> {
        this.valeur = data;
      });
  }
}

