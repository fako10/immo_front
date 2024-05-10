import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Typehabitation, TypehabitationLabelMapping} from "../_models/typehabitation.model";

@Component({
  selector: 'app-createannonce',
  templateUrl: './createannonce.component.html',
  styleUrls: ['./createannonce.component.css']
})
export class CreateannonceComponent implements  OnInit {

  step: any = 1;
  submitted: any = false;

  public TypehabitationLabelMapping = TypehabitationLabelMapping;

  public typesHabitations = Object.values(Typehabitation);


  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  multistep = new FormGroup({
    infobase: new FormGroup({
      typeTransaction: new FormControl(Typehabitation,Validators.required),
      typeBien: new FormControl(''),
      sousTypeBien: new FormControl(''),
      disponibilite: new FormControl('')
    }),
    adresse: new FormGroup({
      pays: new FormControl('Belgique',Validators.required),
      ville: new FormControl(''),
      rue: new FormControl(''),
      numero: new FormControl(''),
      boite: new FormControl('')
    }),
    prix: new FormGroup({
      prixVente: new FormControl('null'),
      revenuCadastr: new FormControl(''),
      tva: new FormControl(''),
      charges: new FormControl(''),
      prixMetreCarre: new FormControl('')

    })
  })





  get userDetails() {
    return this.multistep.controls['infobase']['controls'];
  }

  get contactDetails() {
    return this.multistep.controls['adresse']['controls'];
  }

  submit() {
    this.submitted = true;
    if(this.multistep.controls.infobase.invalid && this.step == 1) {
      return;
    }
    if(this.multistep.controls.adresse.invalid && this.step == 2) {
      return;
    }
    this.step = this.step + 1;
    if(this.step == 4) {
      this.route.navigate(['/home'])
    }
  }

  previous() {
    //const {email, address, contactNumber} = this.contactDetails;
    this.step = this.step - 1;
  }


}
