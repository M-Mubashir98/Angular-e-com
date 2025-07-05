import { Component, inject, signal } from '@angular/core';
import "tailwindcss";
import { PrimaryButton } from '../primary-button/primary-button';
import { Cart } from '../../services/cart';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
cartService = inject(Cart);


 message = signal("this is the signal");
 btnClickedHandler()
 {
  console.log('thsi is the log from header')
 }
}
