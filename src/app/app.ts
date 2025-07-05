import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Component/header/header';

@Component({
  selector: 'app-root',
  imports: [Header,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'project';
}
