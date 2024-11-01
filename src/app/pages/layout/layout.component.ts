import { Component } from '@angular/core';
import {
  ActivatedRoute,
  RouterLink,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
