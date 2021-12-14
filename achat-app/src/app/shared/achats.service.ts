import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin,Observable, of } from 'rxjs';
import {Achat} from '../achats/achat.model';
import {StatutAchat} from '../achats/statutAchat.model';
import { bdInitialAchats } from './data';

@Injectable({
  providedIn: 'root'
})
export class AchatsService {
  achats:Achat[] = [
   
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
  
  constructor(private http:HttpClient) { }

  url = "http://localhost:8010/api/achats";

  getAchats():Observable<Achat[]> {
    //return of(this.achats);
    return this.http.get<Achat[]>(this.url);
  }

  getAchat(id:number):Observable<Achat|undefined> {
    return this.http.get<Achat>(this.url + "/" + id);
  }

  getStatuts():Observable<StatutAchat[]>{
    return of(this.statusList);
  }

  addAchat(achat:Achat):Observable<any> {
    //this.achats.push(achat);
    
    //return of("Achat ajouté");
    return this.http.post(this.url, achat);
  }

  updateAchat(achat:Achat|undefined):Observable<any> {
    return this.http.put(this.url, achat);
  }

  deleteAchat(achat:Achat):Observable<any> {
    //const position = this.achats.indexOf(achat);
    //this.achats.splice(position, 1);
    //return of("Achat Supprimé");
    return this.http.delete(this.url + "/" + achat._id);
  }

  peuplerBDAvecForkJoin(): Observable<any> {
    const appelsVersAddAssignment:any = [];

    bdInitialAchats.forEach((a) => {
      const nouveauAchat = new Achat();

      nouveauAchat.id = a.id;
      nouveauAchat.produit = a.produit;
      nouveauAchat.dateAchat = new Date(a.dateAchat);
      nouveauAchat.valid = a.valid;

      appelsVersAddAssignment.push(this.addAchat(nouveauAchat));
    });
    return forkJoin(appelsVersAddAssignment); // renvoie un seul Observable pour dire que c'est fini
  }

}
