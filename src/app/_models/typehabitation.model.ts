export enum Typehabitation {
  Maison= "Maison",
  Appartement = "Appartement",
  Terrain = "Terrain",
  Garage = "Garage",
  Bureau = "Bureau",
  Industrie = "Industrie",
  Commerce = "Commerce",
  //Chambre = "Chambre",
  //Studio = "Studio",

}


export const TypehabitationLabelMapping: Record<Typehabitation, string> = {
  [Typehabitation.Maison]: "Maison",
  [Typehabitation.Appartement]: "Appartement",
  [Typehabitation.Terrain]: "Terrain",
  [Typehabitation.Garage]: "Garage",
  [Typehabitation.Bureau]: "Bureau",
  [Typehabitation.Industrie]: "Industrie",
  [Typehabitation.Commerce]: "Commerce",
  //[Typehabitation.Chambre]: "Chambre",
  //[Typehabitation.Studio]: "Studio"
};
