import {Component, OnInit} from '@angular/core';
import {AnnonceModel} from "../_models/dto/annonce.model";
import {AnnonceService} from "../_services/annonce.service";
import {ActivatedRoute} from "@angular/router";
import {PhotoModel} from "../_models/dto/photo.model";

@Component({
  selector: 'app-annonceview',
  templateUrl: './annonceview.component.html',
  styleUrls: ['./annonceview.component.css']
})
export class AnnonceviewComponent implements OnInit {
  annonce?: AnnonceModel;
  list = 0;

  constructor(private annonceService : AnnonceService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getAnnonce(this.route.snapshot.params['codeAnnonce']);
  }

  getAnnonce(codeAnnonce: string) : void {
    this.annonceService.getAnnonce(codeAnnonce)
      .subscribe(
        data => {
          this.annonce = data;
        },
        error => {
          console.log(error);
        });
  }

  retrieveImage(photo: PhotoModel | undefined): any {
    return   'data:image/jpeg;base64,' + photo?.bytePhoto;
  }

}
