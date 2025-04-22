import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-confirmacion',
  imports: [CommonModule, RouterModule],
  templateUrl: './confirmacion.component.html',
  styleUrl: './confirmacion.component.css'
})
export class ConfirmacionComponent {
  pedido: any = null;

  ngOnInit(){
    const data = localStorage.getItem('pedido');
    const savedOrder = localStorage.getItem('confirmedOrder');
    if (data) {
      this.pedido = JSON.parse(data);
    }
    if (savedOrder) {
      this.pedido = JSON.parse(savedOrder);
    }
  }



}
