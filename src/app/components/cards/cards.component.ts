import { Component, Input } from '@angular/core';
import { Product } from '../../types';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  @Input() product!:Product //recibe su valor de componente padre, en este caso el padre del componente card es componenteProduct que esta dentro de la carpeta pages

  constructor(private cartService: CartService){}

  addToCart(){
    if (this.product.quantity > 0) {
      this.cartService.addToCart(this.product);
      this.product.quantity -=1; //descuenta una unidad disponible
    }
  }



}
