import { Component, inject } from '@angular/core';
import { Cart } from '../../services/cart';
import { ProductCard } from "../product-list/product-card/product-card";

@Component({
  selector: 'app-cart-component',
  imports: [ProductCard],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.scss'
})
export class CartComponent {
cartServices = inject(Cart)
}
