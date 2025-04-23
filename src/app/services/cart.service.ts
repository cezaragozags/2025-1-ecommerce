import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types';
import { data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems:Product[] = [];
  private cartCountSource = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSource.asObservable();

  private cartItemsSource = new BehaviorSubject<Product[]>([]);
  cartItems$ = this.cartItemsSource.asObservable();

  private count = 0;

  addToCart(product: Product){
    const cartItem = {
      ...product,
      cartItemId: Date.now() + Math.random() // agrega una copia con un identificador unico
    };

    this.cartItems.push(product);
    this.cartItemsSource.next(this.cartItems);
    this.cartCountSource.next(this.cartItems.length);
  }

  getItems(){
    return this.cartItems;
  }

  resetCart(){
    this.cartItems = [];
    this.cartItemsSource.next([]);
    this.cartCountSource.next(0);
  }

  removeFromCart(cartItemId: number){
    const index = this.cartItems.findIndex(item => item._id === cartItemId);

    if (index !== -1){
      const originalProduct = data.find(p => p._id === cartItemId); //restaura la cantidad al producto original en data
      if (originalProduct) {
        originalProduct.quantity += 1;
      }
      this.cartItems.splice(index, 1); //eliminar solo la primera coincidencia

      this.cartItemsSource.next(this.cartItems); //actualizar los observables
      this.count = this.cartItems.length;
      this.cartCountSource.next(this.count);
    }
  }

}
