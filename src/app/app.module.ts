import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnnonceviewComponent } from './annonceview/annonceview.component';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import { CreateannonceComponent } from './createannonce/createannonce.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {AutoCompleteModule} from "primeng/autocomplete";
import {NgSelectModule} from "@ng-select/ng-select";
import {OnlyNumberDirective} from "./_directive/only-number.directive";
import {HttpClientModule} from "@angular/common/http";
import { AnnoncesyntheseComponent } from './annoncesynthese/annoncesynthese.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnonceviewComponent,
    CreateannonceComponent,
    AnnoncesyntheseComponent,
    AnnoncesComponent,
    AnnonceComponent,
    BoardUserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    TranslateModule.forRoot(),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    HttpClientModule,
    MatInputModule,
    AutoCompleteModule,
    NgSelectModule,
    FormsModule,
    OnlyNumberDirective

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
