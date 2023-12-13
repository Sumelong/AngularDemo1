 import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
 import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'lnv-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RoomsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learnv1';
  hotelName ="Hilton Hotel";
}
