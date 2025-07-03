export const ALL_BOOK_GENRES = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY"
] as const;

export interface IBook{ 
    _id: string;
    title : string,
    author : string,
    genre : typeof ALL_BOOK_GENRES[number]
    isbn : string,
    description : string,
    copies : number,
    available : boolean
}