import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {Achat} from './achat.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {AchatsService} from '../shared/achats.service';
import { StatutAchat } from './statutAchat.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-achats',
  templateUrl: './achats.component.html',
  styleUrls: ['./achats.component.css']
})
export class AchatsComponent implements OnInit, AfterViewInit {
  //could stay no harm
  title = "Gestion des achats";
  panelOuvert = false;
  dataSource: MatTableDataSource<Achat> = new MatTableDataSource();
  dataSourceFaux: MatTableDataSource<Achat> = new MatTableDataSource();
  displayedColumnsBis: string[] = ['produit'];
  achats:Achat[] = [];
  statusList:StatutAchat[] = [];
  temp!:Achat;

  @ViewChild('pageTrue') paginator!: MatPaginator;
  @ViewChild('pageFalse') paginatorFaux!: MatPaginator;
  
  constructor(private achatsService:AchatsService,private _snackBar: MatSnackBar,
    private router: Router,private route: ActivatedRoute,) {
    //constructor
  }

  //init
  ngOnInit(): void {
    this.getAchats();
    this.getStatuts();
   // let id: number = +this.route.snapshot.params['id'];
/*
    this.achatsService.getAchat(id).subscribe((assignment) => {
      this.assignmentTransmis = assignment;
    });
    */
  }

  //afterview
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceFaux.paginator = this.paginatorFaux;
  }
  
  //snackBar : Delete
  openSnackBarDelete(message: string, action: string) {
    let snack = this._snackBar.open(message, action);
    snack.onAction().subscribe(()=>{
      this.achatsService.addAchat(this.temp).subscribe((reponse) => {
        console.log(reponse.message);
        //init mattable
        //this.updateTabs();
        this.redirectTo('/home');
      });
    })
    
  }

  //snackBar : Validé
  openSnackBarValidate(message: string, action: string) {
    let snack = this._snackBar.open(message, action);
    snack.onAction().subscribe(()=>{
    })
    
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
    //update paginator with new data
    this.dataSource.paginator = this.paginator;
    this.dataSourceFaux.paginator = this.paginatorFaux;
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

/*
  onNouveauAchat() {
    this.updateTabs();  
  }
*/
  onAchatValid(achat:Achat) {
    if(!achat.valid || !achat.dateValidation){
      achat.valid = true;
      achat.dateValidation = new Date();
      this.openSnackBarValidate("L'achat du produit: "+achat.produit+" est validé","Ok");

      this.achatsService.updateAchat(achat).subscribe((reponse) => {
        console.log(reponse.message);
        //init mattable
        this.updateTabs();
        this.router.navigate(['/home']);
      });
    } 
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }

  onDeleteAchat(achat:Achat) {
    this.temp = achat;
    this.openSnackBarDelete( "Le produit "+achat.produit+" est supprimé" ,"Annuler");
    
    this.achatsService.deleteAchat(achat).subscribe((reponse) => {
      console.log(reponse.message);
      //init mattable
      this.updateTabs();
      this.redirectTo('/home');

    });
  }

  applyFilter(event: Event,statut:StatutAchat){
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if(statut.value == true){
      this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    if(statut.value == false){

    this.dataSourceFaux.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceFaux.paginator) {
      this.dataSourceFaux.paginator.firstPage();
    }  
    }
  }
  
}
