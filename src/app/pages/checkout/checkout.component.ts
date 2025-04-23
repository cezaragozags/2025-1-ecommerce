import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {

  checkOutForm!: FormGroup;
  router: any;

  constructor(public formBuilder: FormBuilder, router:Router) {
    this.checkOutForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


onSubmit(): void{
  if (this.checkOutForm.invalid) return;

  const confirmedOrder = {
    user: this.checkOutForm.value,
    products: JSON.parse (localStorage.getItem('cartItems') || '[]')
  };

  localStorage.setItem('confirmedOrder', JSON.stringify(confirmedOrder));
  alert('¡Gracias por tu compra!');
  localStorage.removeItem('cartItems');

  this.checkOutForm.reset();

  setTimeout(() => {
    this.router.navigate(['/confirmacion']);
  }, 500);
}
}