import { Routes } from "@angular/router";
import {AchatsComponent} from './achats/achats.component';
import {AddAchatComponent} from './achats/add-achat/add-achat.component';
import {AchatDetailsComponent} from './achats/achat-details/achat-details.component';

const routes:Routes = [
    {
      path:"",
      component:AchatsComponent
    },
    {
      path:"home",
      component:AchatsComponent
    },
    {
      path:"add",
      component:AddAchatComponent
    },
    {
      path:"achat/:id",
      component:AchatDetailsComponent
    },
    {
      path: '**',
      redirectTo: "/home"
    }
  ]
  
  export {routes}
  