import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Achat} from '../achats/achat.model';

@Injectable({
  providedIn: 'root'
})
export class AchatsService {
  achats:Achat[] = [
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
  constructor() { }

  getAchats():Observable<Achat[]> {
    return of(this.achats);
  }

  addAchat(achat:Achat):Observable<string> {
    this.achats.push(achat);
    
    return of("Achat ajouté");
  }
}
