export enum Typehabitation {
  Maison= "Maison",
  Appartement = "Appartement",
  Terrain = "Terrain",
  Garage = "Garage",
  Chambre = "Chambre",
  Studio = "Studio",

}


export const TypehabitationLabelMapping: Record<Typehabitation, string> = {
  [Typehabitation.Maison]: "Maison",
  [Typehabitation.Appartement]: "Appartement",
  [Typehabitation.Terrain]: "Terrain",
  [Typehabitation.Garage]: "Garage",
  [Typehabitation.Chambre]: "Chambre",
  [Typehabitation.Studio]: "Studio"
};
