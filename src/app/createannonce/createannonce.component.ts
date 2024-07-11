import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Typehabitation, TypehabitationLabelMapping} from "../_models/typehabitation.model";
import {TypeTransaction} from "../_models/typetransaction.model";


import {
  SousTypehabitationAppartement, SousTypehabitationBureau, SousTypehabitationGarage,
  SousTypehabitationMaison,
  SousTypehabitationTerrain
} from "../_models/soustypehabitation.model";
import {AdresseService} from "../_services/adresse.service";
import {CommuneModel} from "../_models/commune.model";
import {InfobaseModel} from "../_models/dto/Infobase.model";
import {AdresseModel} from "../_models/dto/adresse.model";
import {PrixModel} from "../_models/dto/prix.model";
import {InfoGeneraleModel} from "../_models/dto/infogenerale.model";
import {InterieurModel} from "../_models/dto/interieur.model";
import {ExterieurModel} from "../_models/dto/exterieur.model";
import {TitreetDescriptionModel} from "../_models/dto/titreetdescription.model";
import {CertificationPebModel} from "../_models/dto/certificationpeb.model";
import {AnnonceModel} from "../_models/dto/annonce.model";
import {AnnonceService} from "../_services/annonce.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-createannonce',
  templateUrl: './createannonce.component.html',
  styleUrls: ['./createannonce.component.css']
})
export class CreateannonceComponent implements  OnInit {

  step: any = 1;
  submitted: any = false;
  public typesHabitations = Object.values(Typehabitation);
  public typesTransactions = Object.values(TypeTransaction);
  sousTypehabitations?: Array<string>;
  strAdresses: CommuneModel[] = [];
  adresses: AdresseModel[] = [];
  filteredAdresses?: AdresseModel[];
  selectedFiles : File [] = [];
  annonceSave?: AnnonceModel;


  constructor(private route: Router, private adresseService: AdresseService, private annonceService : AnnonceService) { }

  ngOnInit(): void {
    this.strAdresses = this.adresseService.getAllCodePostal();
    this.adresses =  this.adresseService.getAll();
    console.log(this.adresses);
    this.filteredAdresses = this.adresses;
  }

  multistep = new FormGroup({
    infobase: new FormGroup({
      typeTransaction: new FormControl(null,Validators.required),
      typeBien: new FormControl(null, Validators.required),
      soustypeBien: new FormControl('', Validators.required),
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
      prixVente: new FormControl(null,[Validators.min(0),Validators.required, Validators.pattern("^[0-9]*$")] ),
      revenuCadastre: new FormControl(null, [Validators.min(0), Validators.pattern("/^-?(0|[1-9]\d*)?$/")]),
      tva: new FormControl(null, [Validators.min(0), Validators.pattern("^[0-9]*$")]),
      charges: new FormControl(null, [Validators.min(0), Validators.pattern("^[0-9]*$")]),
      prixMetreCarre: new FormControl(null, [Validators.min(0), Validators.pattern("^[0-9]*$")])
    }),
    infogenerale: new FormGroup({
      nombrefacade: new FormControl(null, Validators.min(0)),
      largeurfacade: new FormControl(null, Validators.min(0)),
      surfaceterrain: new FormControl(null, Validators.min(0)),
      surfaceHabitable: new FormControl(null, Validators.min(0)),
      nombreetage: new FormControl(null, Validators.min(0)),
      anneeconstruction: new FormControl(null, [Validators.min(1900), Validators.pattern("/^-?(0|[1-9]\d*)?$/")]),
      etatBatiment: new FormControl(null),
      parking: new FormControl(null,),
      nombreplaceparking: new FormControl(null, Validators.min(0)),
      ascenseur: new FormControl(null),
      acceshandicape: new FormControl(null),
    }),
    interieur: new FormGroup({
      nombrechambre: new FormControl(null, Validators.min(0)),
      nombrePiece: new FormControl(null, Validators.min(0)),
      nombreSalleBain: new FormControl(null, Validators.min(0)),
      nombreToilette: new FormControl(null, Validators.min(0))
    }),
    exterieur: new FormGroup({
      jardin: new FormControl(null),
      superficieJardin: new FormControl(null),
      piscine: new FormControl(null),
      superficiePiscine: new FormControl(null),
      terrasse: new FormControl(null),
      superficieTerrasse: new FormControl(null),
      vueSurMer: new FormControl(null)
    }),
    titreetdescription: new FormGroup({
      titreFr: new FormControl(null),
      descriptionFr: new FormControl(null),
      titreNl: new FormControl(null),
      descriptionNl: new FormControl(null),
      titreEn: new FormControl(null),
      descriptionEn: new FormControl(null)
    }),
    certificationpeb: new FormGroup({
      classeEnergetique: new FormControl(null),
      numeroReferenceCPEB: new FormControl(null),
      consommationPEB: new FormControl(null, Validators.min(0)),
      emissionPEB: new FormControl(null),
      descriptionPebNL: new FormControl(null),
      descriptionPebFR: new FormControl(null),
      descriptionPebEN: new FormControl(null)
    }),
    photos: new FormGroup({
      photo: new FormControl(null)
    })
  })

  // @ts-ignore
  getSousTypeHabitation() {


    // @ts-ignore
    if(this.infobase.typeBien == "Maison") {
      return ['Apple', 'Orange', 'Banana'];
    }
  }

  onChangeTypeBien(event: any) {

    console.log(event);
    // @ts-ignore
    if(event.target.value == "Maison") {
      this.sousTypehabitations = Object.values(SousTypehabitationMaison);
      console.log(this.sousTypehabitations);
    }

    else if(event.target.value == "Appartement") {
      this.sousTypehabitations = Object.values(SousTypehabitationAppartement);
    }

    else if(event.target.value == "Terrain") {
      this.sousTypehabitations = Object.values(SousTypehabitationTerrain);
    }
    else if(event.target.value == "Garage") {
      this.sousTypehabitations = Object.values(SousTypehabitationGarage);
    }
    else if(event.target.value == "Bureau") {
      this.sousTypehabitations = Object.values(SousTypehabitationBureau);
    }

  }


  onChangeCodePostal(event: any) {
    // @ts-ignore
    this.filteredAdresses = this.adresses.filter(
      addr => addr.codepostal === event.target.value);
    console.log("after");
    console.log(this.filteredAdresses);
  }

  get infobase() {
    return this.multistep.controls['infobase']['controls'];
  }

  get adresseDetails() {
    return this.multistep.controls['adresse']['controls'];
  }
  get prix() {
    return this.multistep.controls['prix']['controls'];
  }

  get infoGenerale() {
    return this.multistep.controls['infogenerale']['controls'];
  }

  get interieur() {
    return this.multistep.controls['interieur']['controls'];
  }

  get exterieur() {
    return this.multistep.controls['exterieur']['controls'];
  }
  get titreetdescription() {
    return this.multistep.controls['titreetdescription']['controls'];
  }

  get certificationpeb() {
    return this.multistep.controls['certificationpeb']['controls'];
  }

  submit() {
    this.submitted = true;
    if(this.multistep.controls.infobase.invalid && this.step == 1) {
      return;
    }
    if(this.multistep.controls.adresse.invalid && this.step == 2) {
      return;
    }

    if(this.multistep.controls.prix.invalid && this.step == 3) {
      return;
    }

    if(this.multistep.controls.infogenerale.invalid && this.step == 4) {
      return;
    }

    if(this.multistep.controls.interieur.invalid && this.step == 5) {
      return;
    }
    if(this.multistep.controls.exterieur.invalid && this.step == 6) {
      return;
    }
    if(this.multistep.controls.titreetdescription.invalid && this.step == 7) {
      return;
    }
    if(this.multistep.controls.certificationpeb.invalid && this.step == 8) {
      return;
    }
    if(this.multistep.controls.photos.invalid && this.step == 9) {
      return;
    }
    this.step = this.step + 1;
    if(this.step == 10 ) {

      let annonce = this.createAnnonce();

      // @ts-ignore

      this.annonceService.saveAnnonce(annonce)
        .subscribe(
          data => {
            this.annonceSave = data;
            // @ts-ignore
            this.annonceService.addPhoto(annonce.codeAnnonce, this.selectedFiles).subscribe(data => {
              console.log(data);
            });

          },
          error => {
            console.log(error);
          })

      // @ts-ignore
      localStorage.setItem('files', this.selectedFiles);


      this.route.navigate(['/home']);
    }


  }

  public onFileChanged(event: Event) {
    //Select File
    // @ts-ignore
    this.selectedFiles = event.target.files;
  }

  // @ts-ignore
  createAdresse(): AdresseModel {
    let pays = this.adresseDetails.pays.value == null? "": this.adresseDetails.pays.value;
    let ville = this.adresseDetails.ville.value == null? "": this.adresseDetails.ville.value;
    let rue = this.adresseDetails.rue.value == null ? "" : this.adresseDetails.rue.value;
    let numero = this.adresseDetails.numero.value == null ? "" : this.adresseDetails.numero.value;
    let boite = this.adresseDetails.boite.value == null ? "" : this.adresseDetails.boite.value;
    // @ts-ignore
    let adresseModel = new AdresseModel();
    adresseModel.villeFr = ville;
    adresseModel.rueFr = rue;
    adresseModel.numero = numero;
    adresseModel.boite = boite;
    console.log("adressemodel :" + adresseModel.rueFr);
    return adresseModel;
  }


  // @ts-ignore
  createInfoBase(): InfobaseModel {
      let typeTransaction = this.infobase.typeTransaction.value ==  null? "" : this.infobase.typeTransaction.value;
      let typeBien = this.infobase.typeBien.value ==  null? "" : this.infobase.typeBien.value;
      let soustypeBien = this.infobase.soustypeBien.value ==  null? "" : this.infobase.soustypeBien.value;
      let disponibilite = this.infobase.disponibilite.value ==  null? "" : this.infobase.disponibilite.value;
      return new InfobaseModel(typeTransaction, typeBien, soustypeBien, disponibilite);
  }

  // @ts-ignore
  createPrix(): PrixModel {

    let prixVente = this.prix.prixVente.value == null? 0 : this.prix.prixVente.value;
    let revenuCadastre = this.prix.revenuCadastre.value == null? 0 : this.prix.revenuCadastre.value;
    let tva = this.prix.tva.value == null? 0 : this.prix.tva.value;
    let charges = this.prix.charges.value == null? 0 : this.prix.charges.value;
    let prixMetreCarre = this.prix.prixMetreCarre.value == null? 0 : this.prix.prixMetreCarre.value;
    return new PrixModel(prixVente, revenuCadastre, tva, charges, prixMetreCarre);

  }


  // @ts-ignore
  createInfoGenerale() : InfoGeneraleModel {
    let nombrefacade = this.infoGenerale.nombrefacade.value == null ? 0 : this.infoGenerale.nombrefacade.value;
    let largeurfacade = this.infoGenerale.largeurfacade.value == null ? 0 : this.infoGenerale.largeurfacade.value;
    let surfacetotale = this.infoGenerale.surfaceterrain.value == null ? 0 : this.infoGenerale.surfaceterrain.value;
    let surfacehabitable = this.infoGenerale.surfaceHabitable.value == null ? 0 : this.infoGenerale.surfaceHabitable.value;
    let nombreetage = this.infoGenerale.nombreetage.value == null ? 0 : this.infoGenerale.nombreetage.value;
    let anneeconstruction = this.infoGenerale.anneeconstruction.value == null ? 0 : this.infoGenerale.anneeconstruction.value;
    let etatBatiment = this.infoGenerale.anneeconstruction.value == null ? "" : this.infoGenerale.anneeconstruction.value;
    let parking = this.infoGenerale.parking.value == null ? false : this.infoGenerale.parking.value;
    let nombreplaceparking = this.infoGenerale.nombreplaceparking.value == null ? 0 : this.infoGenerale.nombreplaceparking.value;
    let ascenseur = this.infoGenerale.ascenseur.value == null ? false : this.infoGenerale.ascenseur.value;
    let acceshandicape = this.infoGenerale.acceshandicape.value == null ? false : this.infoGenerale.acceshandicape.value;
    return new InfoGeneraleModel(nombrefacade, largeurfacade, surfacetotale,surfacehabitable,
      nombreetage, anneeconstruction, etatBatiment, parking, nombreplaceparking, ascenseur,acceshandicape);
  }





  createInterieur(): InterieurModel {
    let nombrechambre = this.interieur.nombrechambre.value == null ? 0 : this.interieur.nombrechambre.value;
    let nombrePiece = this.interieur.nombrePiece.value == null ? 0 : this.interieur.nombrePiece.value;
    let nombreSalleBain = this.interieur.nombreSalleBain.value == null ? 0 : this.interieur.nombreSalleBain.value;
    let nombreToilette = this.interieur.nombreToilette.value == null ? 0 : this.interieur.nombreToilette.value;
    return  new InterieurModel(nombrechambre, nombrePiece, nombreSalleBain, nombreToilette);
  }

  // @ts-ignore
  createExterieur() : ExterieurModel {
    let jardin = this.exterieur.jardin.value == null ? false : this.exterieur.jardin.value;
    let superficieJardin = this.exterieur.superficieJardin.value == null ? 0 : this.exterieur.superficieJardin.value;
    let piscine = this.exterieur.piscine.value == null ? false : this.exterieur.piscine.value;
    let superficiePiscine = this.exterieur.superficiePiscine.value == null ? 0 : this.exterieur.superficiePiscine.value;
    let terrasse = this.exterieur.terrasse.value == null ? false : this.exterieur.terrasse.value;
    let superficieTerrasse = this.exterieur.superficieTerrasse.value == null ? 0 : this.exterieur.superficieTerrasse.value;
    let vueSurMer = this.exterieur.vueSurMer.value == null ? false : this.exterieur.vueSurMer.value;
    return new ExterieurModel(jardin, superficieJardin, piscine, superficiePiscine, terrasse, superficieTerrasse, vueSurMer);
  }

  // @ts-ignore
  createTitreEtDescription() : TitreetDescriptionModel {
    let titreFr = this.titreetdescription.titreFr.value == null ? "" : this.titreetdescription.titreFr.value;
    let descriptionFr = this.titreetdescription.descriptionFr.value == null ? "" : this.titreetdescription.descriptionFr.value;
    let titreNl = this.titreetdescription.titreNl.value == null ? "" : this.titreetdescription.titreNl.value;
    let descriptionNl = this.titreetdescription.descriptionNl.value == null ? "" : this.titreetdescription.descriptionNl.value;
    let titreEn = this.titreetdescription.titreEn.value == null ? "" : this.titreetdescription.titreEn.value;
    let descriptionEn = this.titreetdescription.descriptionEn.value == null ? "" : this.titreetdescription.descriptionEn.value;
    return new TitreetDescriptionModel(titreFr, descriptionFr, titreNl, descriptionNl, titreEn, descriptionEn);
  }

  // @ts-ignore
  createCertificationPeb() : CertificationPebModel {
    let classeEnergetique = this.certificationpeb.classeEnergetique.value == null ? "" : this.certificationpeb.classeEnergetique.value;
    let numeroReferenceCPEB = this.certificationpeb.numeroReferenceCPEB.value == null ? "" : this.certificationpeb.numeroReferenceCPEB.value;
    let consommationPEB = this.certificationpeb.consommationPEB.value == null ? 0 : this.certificationpeb.consommationPEB.value;
    let emissionPEB = this.certificationpeb.emissionPEB.value == null ? 0 : this.certificationpeb.emissionPEB.value;
    let descriptionPebFR = this.certificationpeb.descriptionPebFR.value == null ? "" : this.certificationpeb.descriptionPebFR.value;
    let descriptionPebNL = this.certificationpeb.descriptionPebNL.value == null ? "" : this.certificationpeb.descriptionPebNL.value;
    let descriptionPebEN = this.certificationpeb.descriptionPebEN.value == null ? "" : this.certificationpeb.descriptionPebEN.value;
    return new CertificationPebModel(classeEnergetique, numeroReferenceCPEB, consommationPEB, emissionPEB, descriptionPebFR, descriptionPebNL, descriptionPebEN);
  }



  // @ts-ignore
  createAnnonce() : AnnonceModel {
    // @ts-ignore

    let adresse = this.createAdresse();
    console.log("numero : " + adresse.numero);
    let certificationPeb = this.createCertificationPeb();
    let exterieur = this.createExterieur();
    let infobase = this.createInfoBase();
    let infogenerale = this.createInfoGenerale();
    let interieur = this.createInterieur();
    let prix = this.createPrix();
    let titres = this.createTitreEtDescription();
    let dateAnnonce = new Date();
    console.log('date : ' + dateAnnonce);
    const cValue = formatDate(dateAnnonce, 'yyyyMMddhhmmss', 'en-US');
    console.log('cValue : ' + cValue);
    let annonce  = new AnnonceModel(adresse, cValue, certificationPeb, exterieur,
      infobase, infogenerale, interieur, prix, titres);
    console.log("prix vente : " + annonce.prix?.prixVente);
    //annonce.photos = this.selectedFiles;
    return annonce;
  }

   makeRandom() {
    let text = "";
    let possible = "1234567890";
     const lengthOfCode = 6;
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  previous() {
    //const {email, address, contactNumber} = this.contactDetails;
    this.step = this.step - 1;
  }

}
