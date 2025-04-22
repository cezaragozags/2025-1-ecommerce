import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  cartCount: number = 0; //remplazarlo dinamicamente con el servicio del carrito

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }


}
