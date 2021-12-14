import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AchatsService } from './shared/achats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion des Achats';
  links = [{
              name:"inventory_2",
              link:"/home"
            },
            {
              name: 'post_add',
              link:"/add"
          }];
  activeLink = this.links[0];

  constructor(
    private achatsService:AchatsService,
    private router:Router) {}

  genererDonneesDeTest() {
    this.achatsService.peuplerBDAvecForkJoin()
    .subscribe(() => {
      // ok, les 1000 données ont bien été insérées...
      console.log("TOUTES LES DONNEES ONT BIEN ETE INSEREES");

      this.router.navigate(["/home"]);
    });
  }
}
