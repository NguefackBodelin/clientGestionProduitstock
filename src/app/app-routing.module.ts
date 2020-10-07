import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProduitResolver } from './produit/produit.resolver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children: [
      {
        path:'produit',
        component:ProduitComponent,
        resolve: {
          produits: ProduitResolver
        },
        outlet:'contentOutlet'
      },
      {
        path:'dashboard',
        component:DashboardComponent,
        outlet:'contentOutlet'
      }// utile sulle slidebar.html a traver router-outlet dans content.component.html
    ]
  },
  {
    path:'',
    redirectTo:'/home',      // page par defaut il me met le dashboard
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{enableTracing:true})],
  exports: [RouterModule],
  providers:[ProduitResolver]
})
export class AppRoutingModule { }
