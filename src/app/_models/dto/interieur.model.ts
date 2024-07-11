

export class InterieurModel {

  id?:                number;
  idAnnonce?:         number;
  nombrechambre?:     number;
  nombrePiece?:       number;
  nombreSalleBain?:   number;
  nombreToilette?:    number;


  constructor(
    nombrechambre:    number,
    nombrePiece:      number,
    nombreSalleBain:  number,
    nombreToilette:   number
  ) {
      this.nombrechambre = nombrechambre;
      this.nombrePiece = nombrePiece;
      this.nombreSalleBain = nombreSalleBain;
      this.nombreToilette = nombreToilette;
  }
}
