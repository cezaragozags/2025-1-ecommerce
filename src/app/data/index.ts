import { Product } from "../types";

export const data:Product[] = [
  {
      _id: 1,
      name: "White",
      description: "Minimalista y elegante",
      aviable: true,
      quantity: 10,
      image:"assets/White.jpg"
  },
  {
      _id: 2,
      name: "Sencillo",
      description: "Pasta dura y portada impresa",
      aviable: true,
      quantity: 25,
      image:"assets/Sencillo.jpg"
  },
  {
      _id: 3,
      name: "Clásico",
      description: "Pasta dura y grabado personalizado",
      aviable: false,
      quantity: 0,
      image:"assets/Clasico.jpg"
  },
  {
      _id: 4,
      name: "Premium",
      description: "Forrado en piel reciclada con grabado personalizado",
      aviable: true,
      quantity: 5,
      image:"assets/Premium.jpg"
  },
]