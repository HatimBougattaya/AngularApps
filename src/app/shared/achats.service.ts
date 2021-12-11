import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Achat} from '../achats/achat.model';
import {StatutAchat} from '../achats/statutAchat.model';
@Injectable({
  providedIn: 'root'
})
export class AchatsService {
  achats:Achat[] = [
    {
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },
    {
      produit : "Pneu aaaaaaaaaaaaaaaaaaaaaaaaa",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },
    {
      produit : "a",
      dateAchat: new Date("2021-12-28"),
      valid: false
    },{
      produit : "b",
      dateAchat: new Date("2021-10-28"),
      valid: true
    },{
      produit : "c",
      dateAchat: new Date("2021-09-14"),
      valid: false
    }
  ];

  statusList:StatutAchat[] = [
    {
      name : 'Validé',
      icon: 'check_circle_outline',
      value: true
    },
    {
      name : 'Non Validé',
      icon: 'highlight_off',
      value: false
    }
];
  
  constructor() { }

  getAchats():Observable<Achat[]> {
    return of(this.achats);
  }

  getStatuts():Observable<StatutAchat[]>{
    return of(this.statusList);
  }

  addAchat(achat:Achat):Observable<string> {
    this.achats.push(achat);
    
    return of("Achat ajouté");
  }
}
