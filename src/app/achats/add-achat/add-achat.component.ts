import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Achat } from '../achat.model';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-add-achat',
  templateUrl: './add-achat.component.html',
  styleUrls: ['./add-achat.component.css']
})
export class AddAchatComponent implements OnInit {

  @Output() nouveauAchat = new EventEmitter<Achat>();
  nomProduit!:String;
  nomMagasin!:String;
  dateAchat!:Date;


  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBarAjout(message: string, action: string) {
    let snack = this._snackBar.open(message, action);    
  }

  onSubmit() {
    let newAchat = new Achat();

    if (this.nomProduit && this.dateAchat) {
      newAchat.produit = this.nomProduit;
      newAchat.magasin = this.nomMagasin;
      newAchat.valid = false;
      newAchat.dateValidation = undefined;
      newAchat.dateAchat = this.dateAchat;
      this.openSnackBarAjout("Ajout de l'achat du produit: "+this.nomProduit,"Ok");
      this.nouveauAchat.emit(newAchat);
    }
  }
}
