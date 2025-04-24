import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {

  checkOutForm!: FormGroup;

  constructor(public formBuilder: FormBuilder, private router:Router, private cartService:CartService) {
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
      products: this.cartService.getItems()
    };

    localStorage.setItem('confirmedOrder', JSON.stringify(confirmedOrder));
    
    this.cartService.resetCart();

    this.checkOutForm.reset();
    alert('¡Gracias por tu compra!');
    setTimeout(() => {
      this.router.navigate(['']);
    }, 0);
  }
}