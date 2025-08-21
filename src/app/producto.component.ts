import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-white rounded shadow p-8 mt-8 max-w-lg mx-auto">
      <h2 class="text-2xl font-bold text-blue-700 mb-4">Detalle del producto</h2>
      <div *ngIf="productoId" class="text-lg text-gray-700 mb-6">ID del producto: <span class="font-mono">{{ productoId }}</span></div>
      <a routerLink="/catalogo" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">Volver al catálogo</a>
    </div>
  `
})
export class ProductoComponent {
  productoId: string | null = null;

  constructor(private route: ActivatedRoute) {
    this.route.queryParamMap.subscribe(params => {
      this.productoId = params.get('id');
    });
  }
}
