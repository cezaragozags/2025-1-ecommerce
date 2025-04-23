import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  checkoutForm = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  email: new FormControl('', [Validators.required, Validators.email]),
  address: new FormControl('', [Validators.required])
});

constructor(private router:Router) {}

onSubmit(){
  if (this.checkoutForm.invalid) return;

  const confirmedOrder = {
    user: this.checkoutForm.value,
    products: JSON.parse (localStorage.getItem('cartItems') || '[]')
  };

  localStorage.setItem('confirmedOrder', JSON.stringify(confirmedOrder));
  alert('¡Gracias por tu compra!');
  localStorage.removeItem('cartItems');

  this.checkoutForm.reset();

  setTimeout(() => {
    this.router.navigate(['/confirmacion']);
  }, 500);
}
}