import { Component } from '@angular/core';

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
}
