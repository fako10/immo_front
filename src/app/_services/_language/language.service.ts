import {Injectable} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private keyLanguage = 'userLanguage';
  private userLanguage = '';
  private supportedLanguages =  ['fr', 'en', 'nl']

  constructor(private translate : TranslateService) {
    this.initLanguage();
    this.translate.use(this.userLanguage);
  }

  initLanguage() {
    const value = localStorage.getItem(this.keyLanguage);
    if(value != null) {
      this.userLanguage = value;
    } else {
      const browserLanguage = navigator.language.split('-')[0];
      if(this.supportedLanguages.includes(browserLanguage)) {
        this.userLanguage = browserLanguage;
        localStorage.setItem(this.keyLanguage, browserLanguage);
      } else {

      }

    }

  }

  setLanguage(language: string)  {
    this.userLanguage = language;
    localStorage.setItem(this.keyLanguage, language);
    this.translate.use(this.userLanguage);
  }

  getUserLanguage() {
    return this.userLanguage;
  }

  getAvailablesLanguages() {
    return this.supportedLanguages;
  }

}
