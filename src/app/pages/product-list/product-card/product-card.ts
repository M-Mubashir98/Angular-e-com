import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryButton } from "../../../Component/primary-button/primary-button";
import { Cart } from '../../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  item = input.required<Product>();
  
  cartService = inject(Cart);
onAddToCart(product : Product) {
  // handle button click here

//this.cartService.addToCart(product);
 console.log("Add to Cart clicked for:", this.item);
}


}
