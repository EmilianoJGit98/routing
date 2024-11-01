import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css',
})
export class ActividadesComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('idEvento')!);
  }
}
