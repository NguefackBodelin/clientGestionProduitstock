import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
  {path:'produit', component:ProduitComponent },
  {path:'dashboard', component:DashboardComponent },// utile sulle slidebar.html a traver router-outlet dans content.component.html
  {path:'', redirectTo:'/dashboard', pathMatch:'full'} // par defaut il me met le dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
