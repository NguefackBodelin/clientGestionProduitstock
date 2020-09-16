import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/observable';

import { ProduitService } from './produit.service';
import { Produit } from '../shared/produits'

@Injectable()
export class ProduitResolver implements Resolve<any>{

  constructor(private produitService:ProduitService){

  }

  resolve(){
    return this.produitService.getProduits();
  }
}
