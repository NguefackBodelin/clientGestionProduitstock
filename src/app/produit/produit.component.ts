import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';

import { ProduitService } from './produit.service';
import { Produit } from "../shared/produits";

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[];
  produitForm: FormGroup;
  operation:string ='add';
  selectedProduit:Produit;

  constructor(private produitService:ProduitService, private fb:FormBuilder, private route:ActivatedRoute) {
    this.createForm();
   }

  ngOnInit() {
    this.initProduit();
    //this.loadProduits(); on a remplacer par le resolver qui charge automatiquement la page inizialement et remplacé par
    this.produits = this.route.snapshot.data.produits;
  }

  loadProduits(){
    this.produitService.getProduits().subscribe(
      data => {this.produits=data},
      error => { console.log('and error was occured.')},
      () => { console.log('loading produits was done.')}
    );
  }

  addProduit(){
    const p = this.produitForm.value;
    this.produitService.addProduit(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  createForm(){
    this.produitForm=this.fb.group({
      ref:['',Validators.required],
      quantite:'',
      prixUnitaire:''
    });
  }

  updateProduit(){
    this.produitService.updateProduit(this.selectedProduit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  initProduit(){
    this.selectedProduit= new Produit();
    this.createForm();
  }

  deleteProduit(){
    this.produitService.deleteProduit(this.selectedProduit.ref).subscribe(
      res => {
        this.selectedProduit= new Produit();
        this.loadProduits();

      }
    );

  }

}
