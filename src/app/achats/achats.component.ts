import { Component, OnInit } from '@angular/core';
import {Achat} from './achat.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AchatsService} from '../shared/achats.service';
import { StatutAchat } from './statutAchat.model';

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
  dataSourceFaux: MatTableDataSource<Achat> = new MatTableDataSource();
  displayedColumnsBis: string[] = ['produit'];
  achats:Achat[] = [];
  statusList:StatutAchat[] = [];
  achatSelectionne?:Achat;

  
  //constructor
  constructor(private achatsService:AchatsService) {
   }

  //init
  ngOnInit(): void {
    this.getAchats();
    this.getStatuts();
  }

  //utility and events
  filterAchat(st : boolean, stt:boolean) : boolean {
    let truth = st==stt; 
    return !truth;
  }

  chooseData(st:StatutAchat) : MatTableDataSource<Achat> {
    if(st.value){
      return this.dataSource; 
    }else{
      return this.dataSourceFaux;
    }
  }

  updateTabs(){
    //init
    this.dataSource = new MatTableDataSource();
    this.dataSourceFaux = new MatTableDataSource();
    //update
    this.achats.forEach(element => {
      if(element.valid){
        this.dataSource.data.push(element);
      }else{
        this.dataSourceFaux.data.push(element);
      }
    });
  }

  getAchats() {
    this.achatsService.getAchats()
    .subscribe(achats => {
      this.achats = achats;
      //init mattable
      this.updateTabs();
    });
  }

  getStatuts(){
    this.achatsService.getStatuts().subscribe(statusList=>{
      this.statusList = statusList;
    })
  }


  onNouveauAchat(achat:Achat) {
    this.achatsService.addAchat(achat)
    .subscribe(message => {
      this.updateTabs();
      console.log(message);
    })
  }

  onAchatValid(achat:Achat) {
    achat.valid = true;
    this.updateTabs();;
  }

  onDeleteAchat(achat:Achat) {
    const position = this.achats.indexOf(achat);
    this.achats.splice(position, 1);
    this.updateTabs();
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
