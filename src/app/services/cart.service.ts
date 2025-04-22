import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../types';

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

  removeFromCart(productId: number){
    this.cartItems = this.cartItems.filter(item => item._id !== productId);
    this.cartItemsSource.next(this.cartItems);

    this.count = this.cartItems.length;
    this.cartCountSource.next(this.count)
  }

}
