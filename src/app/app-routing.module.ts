import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AnnonceviewComponent} from "./annonceview/annonceview.component";
import {CreateannonceComponent} from "./createannonce/createannonce.component";
import {AnnoncesComponent} from "./annonces/annonces.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'annonceview/:codeAnnonce', component: AnnonceviewComponent },
  { path: 'annonces', component: AnnoncesComponent },
  { path: 'createannonce', component: CreateannonceComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
