import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="bg-white rounded shadow p-8 mt-8">
      <h2 class="text-2xl font-bold text-blue-700 mb-6">Catálogo de productos</h2>
      <ul class="space-y-4">
        <li *ngFor="let producto of productos" class="flex items-center justify-between border-b pb-2">
          <span class="text-lg text-gray-700">{{ producto.nombre }}</span>
          <a [routerLink]="['/producto']" [queryParams]="{ id: producto.id }" class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-1 rounded transition-colors">Ver detalle</a>
        </li>
      </ul>
    </div>
  `
})
export class CatalogoComponent {
  productos = [
    { id: 1, nombre: 'Producto 1' },
    { id: 2, nombre: 'Producto 2' },
    { id: 3, nombre: 'Producto 3' }
  ];
}
