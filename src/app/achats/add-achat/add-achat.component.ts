import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Achat } from '../achat.model';
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


  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    let newAchat = new Achat();

    if (this.nomProduit && this.dateAchat) {
      newAchat.produit = this.nomProduit;
      newAchat.magasin = this.nomMagasin;
      newAchat.valid = false;
      newAchat.dateValidation = undefined;
      newAchat.dateAchat = this.dateAchat;

      this.nouveauAchat.emit(newAchat);
    }
  }
}
