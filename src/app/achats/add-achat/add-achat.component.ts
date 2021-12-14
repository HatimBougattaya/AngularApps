import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Achat } from '../achat.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AchatsService } from 'src/app/shared/achats.service';
import { Router } from '@angular/router';
import { StatutAchat } from '../statutAchat.model';
@Component({
  selector: 'app-add-achat',
  templateUrl: './add-achat.component.html',
  styleUrls: ['./add-achat.component.css']
})
export class AddAchatComponent implements OnInit {

  //for matTab
  //@Output() nouveauAchat = new EventEmitter<any>();
  nomProduit!:String;
  nomMagasin!:String;
  dateAchat!:Date;
  statusList:StatutAchat[] = [];

//injection service && appel direct pour les operations
  constructor(private achatService:AchatsService,
    private router:Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getStatuts();
  }

  getStatuts(){
    this.achatService.getStatuts().subscribe(statusList=>{
      this.statusList = statusList;
    })
  }


  openSnackBarAjout(message: string, action: string) {
    let snack = this._snackBar.open(message, action);    
  }

  onSubmit() {
    let newAchat = new Achat();

    if (this.nomProduit && this.dateAchat) {
      newAchat.id = Math.round(Math.random()*10000000);
      newAchat.produit = this.nomProduit;
      newAchat.magasin = this.nomMagasin;
      newAchat.dateAchat = this.dateAchat;
      newAchat.valid = false;
      this.openSnackBarAjout("Ajout de l'achat du produit: "+this.nomProduit,"Ok");
      this.achatService.addAchat(newAchat).subscribe(reponse => {
        console.log(reponse.message);
        //this.nouveauAchat.emit();
        this.router.navigate(["/home"]);
      });
      
    }
  }
}
