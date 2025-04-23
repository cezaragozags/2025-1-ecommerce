import { Component, OnInit } from '@angular/core';
import { Product } from '../../types';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports:[FormsModule, CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit{
  cartItems: Product[] = []; //almacena la lista de productos en el carrito.

  constructor(private cartService: CartService, private router:Router){} //	cartService: para acceder a funciones como getItems(), removeFromCart(), etc. router: para redireccionar al usuario al finalizar la compra.

  removeItem(cartItemId:number){  // Se llama al dar clic en el ícono de eliminar en la vista.
    this.cartService.removeFromCart(cartItemId); // Le pasa el id del producto a eliminar al servicio.
  }

  ngOnInit(): void{
    this.cartService.cartItems$.subscribe(items => { //Se ejecuta al iniciar el componente.
      this.cartItems = items;  //Suscripción a cartItems$ (observable): permite que el componente reaccione automáticamente si cambian los productos del carrito (se agregan o eliminan).
    });
  }

  formData = { // Es el modelo del formulario de envío. Este objeto se vincula en el HTML con [(ngModel)], permitiendo que Angular detecte lo que el usuario escribe.
    name:'',
    email:'',
    address:''
  };

  onSubmit() {  // Crea un objeto confirmedOrder con la info del usuario y los productos.
   const confirmedOrder = {
    user: this.formData,
    products: this.cartItems
   };

   localStorage.setItem('confirmedOrder', JSON.stringify(confirmedOrder)); // Lo guarda en localStorage para consultarlo después en la página /confirmacion.

   alert('¡Gracias por tu compra!');

   this.cartService.resetCart();
   this.formData = {name: '', email: '', address: ''}; // Limpia el carrito y el formulario.

   setTimeout(() => {
    this.router.navigate(['/confirmacion']); // Redirige a la vista de confirmación.
   }, 500);
  }
}