import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent {}
