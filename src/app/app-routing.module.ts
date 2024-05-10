import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AnnonceviewComponent} from "./annonceview/annonceview.component";
import {CreateannonceComponent} from "./createannonce/createannonce.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'annonceview', component: AnnonceviewComponent },
  { path: 'createannonce', component: CreateannonceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
