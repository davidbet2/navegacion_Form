import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="flex flex-col items-center justify-center gap-6 py-16">
      <h2 class="text-3xl font-bold text-blue-700 mb-2">Bienvenido al Catálogo</h2>
      <p class="text-lg text-gray-600 mb-4">Explora los productos disponibles y regístrate para más opciones.</p>
      <a routerLink="/catalogo" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow transition-colors">Ver catálogo</a>
    </div>
  `
})
export class HomeComponent {}
