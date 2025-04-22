import { Injectable } from '@angular/core'; // Permite usar servicios con inyección de dependencias
import { Product } from '../types'; // Tu interfaz de tipo Product
import { data } from '../data'; // Tus productos mockeados

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products:Product[]=data;

  constructor() { }

  public getAllProducts():Product[]{
    return this.products;
  }

  public getProductById(id: number): Product | undefined { //Esto puede ser útil más adelante si quieres mostrar detalles de un producto:
    return this.products.find(p => p._id === id);
  }





}
