import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Achat } from '../achat.model';

@Component({
  selector: 'app-achat-details',
  templateUrl: './achat-details.component.html',
  styleUrls: ['./achat-details.component.css']
})
export class AchatDetailsComponent implements OnInit {
  @Input() row?:Achat;
  @Input() i?:number;


  @Output() deleteAchat = new EventEmitter<Achat>();

  displayedColumns: string[] = ['id', 'produit', 'magasin', 'dateAchat','dateValidation','delete'];

  constructor() { }

  ngOnInit(): void {
  }

  

  onDelete() {
    this.deleteAchat.emit(this.row);
  }
}
