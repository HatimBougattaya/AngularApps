export class Achat{
    _id?:string;
    id!:number;
    produit!:String;
    magasin?:String;
    dateAchat!:Date;
    dateValidation?:Date;
    valid!:boolean;
}