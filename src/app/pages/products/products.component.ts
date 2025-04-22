import { Component } from '@angular/core';
import { Product } from '../../types';  //tu modelo para productos.
import { ProductsService } from '../../services/products.service'; //obtiene los productos desde data/index.ts.
import { CardsComponent } from "../../components/cards/cards.component"; //el componente visual que renderiza cada tarjeta.

@Component({
  selector: 'app-products',
  imports: [CardsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[]=[];

  constructor(private productsService: ProductsService){}
  


  ngOnInit():void{
    this.fnGetData();  // Carga los productos al iniciar el componente
  }

  fnGetData(){
    this.products=this.productsService.getAllProducts();  // Obtiene los productos
  }




}
