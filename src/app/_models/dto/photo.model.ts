export class PhotoModel {

  position?:              number;
  bytePhoto?:                  File;


  constructor(position: number, file: File) {
    this.position = position;
    this.bytePhoto = file;
  }


}
