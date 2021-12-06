import { Component, OnInit } from '@angular/core';
import {Achat} from './achat.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AchatsService} from '../shared/achats.service';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit {
  //could stay no harm
  title = "Gestion des achats";
  panelOuvert = false;
  dataSource: MatTableDataSource<Achat> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'produit', 'magasin', 'dateAchat','dateValidation'];
  displayedColumnsBis: string[] = ['produit'];
  achats:Achat[] = [];

  achatSelectionne?:Achat;

  statusList = [
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
  
  //
  constructor(private achatsService:AchatsService) {
   }

  //init
  ngOnInit(): void {
    console.log("Appelé avant affichage");
    this.getAchats();
  }

  //utility and events
  filterAchat(st : boolean, stt:boolean) : boolean {
    let truth = st==stt; 
    return !truth;
  }

  getAchats() {
    this.achatsService.getAchats()
    .subscribe(achats => {
      this.achats = achats;
      //init mattable
      this.dataSource = new MatTableDataSource(this.achats);
    });
  }


  onNouveauAchat(achat:Achat) {
    this.achatsService.addAchat(achat)
    .subscribe(message => {
      this.dataSource = new MatTableDataSource(this.achats);
      console.log(message);
    })
  }

  onDeleteAchat(achat:Achat) {
    const position = this.achats.indexOf(achat);
    this.achats.splice(position, 1);
  }
/*
  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
*/
/*
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
*/  
}
