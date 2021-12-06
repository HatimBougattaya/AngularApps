import { Component, Input, OnInit } from '@angular/core';
import { Achat } from '../achat.model';

@Component({
  selector: 'app-achat-details',
  templateUrl: './achat-details.component.html',
  styleUrls: ['./achat-details.component.css']
})
export class AchatDetailsComponent implements OnInit {
  @Input() row?:Achat;
  @Input() i?:number;

  displayedColumns: string[] = ['id', 'produit', 'magasin', 'dateAchat','dateValidation'];
  
  constructor() { }

  ngOnInit(): void {
  }
}
