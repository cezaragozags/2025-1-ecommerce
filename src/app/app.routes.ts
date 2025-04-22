import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';

export const routes: Routes = [
  {path:'', component:ProductsComponent, title:"Photobooks"}, //este titulo se presenta en el titulo de la pestaña del navegador
  {path:'cart', component:CartComponent, title:"Carrito"},
  {path:'checkout', component:CheckoutComponent, title:"Checkout"},
  {path:'confirmacion', component:ConfirmacionComponent, title:"Confirmacion"}


];
