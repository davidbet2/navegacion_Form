import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="max-w-xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg border border-blue-100">
      <h2 class="text-3xl font-bold mb-6 text-center text-blue-700">Registro</h2>
      <form [formGroup]="form" (ngSubmit)="onSubmit()" novalidate class="space-y-5">
        <div>
          <label class="block font-semibold mb-1 text-gray-700">Nombre</label>
          <input class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" formControlName="nombre" />
          <div *ngIf="form.get('nombre')?.touched && form.get('nombre')?.invalid" class="text-red-500 text-xs mt-1">
            El nombre es obligatorio.
          </div>
        </div>
        <div>
          <label class="block font-semibold mb-1 text-gray-700">Apellidos</label>
          <input class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" formControlName="apellidos" />
          <div *ngIf="form.get('apellidos')?.touched && form.get('apellidos')?.invalid" class="text-red-500 text-xs mt-1">
            Los apellidos son obligatorios.
          </div>
        </div>
        <div>
          <label class="block font-semibold mb-1 text-gray-700">Edad</label>
          <input type="number" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" formControlName="edad" />
          <div *ngIf="form.get('edad')?.touched && form.get('edad')?.invalid" class="text-red-500 text-xs mt-1">
            Edad válida requerida (mayor de 0).
          </div>
        </div>
        <div>
          <label class="block font-semibold mb-1 text-gray-700">Sexo</label>
          <select class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" formControlName="sexo">
            <option value="">Seleccione</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
            <option value="O">Otro</option>
          </select>
          <div *ngIf="form.get('sexo')?.touched && form.get('sexo')?.invalid" class="text-red-500 text-xs mt-1">
            Seleccione un sexo.
          </div>
        </div>
        <div>
          <label class="block font-semibold mb-1 text-gray-700">Nacionalidad</label>
          <input class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" formControlName="nacionalidad" />
          <div *ngIf="form.get('nacionalidad')?.touched && form.get('nacionalidad')?.invalid" class="text-red-500 text-xs mt-1">
            <ng-container *ngIf="form.get('nacionalidad')?.errors?.['required']">La nacionalidad es obligatoria.</ng-container>
            <ng-container *ngIf="form.get('nacionalidad')?.errors?.['maxlength']">Máximo 20 caracteres.</ng-container>
          </div>
        </div>
        <div>
          <label class="block font-semibold mb-1 text-gray-700">Dirección</label>
          <input class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" formControlName="direccion" />
          <div *ngIf="form.get('direccion')?.touched && form.get('direccion')?.invalid" class="text-red-500 text-xs mt-1">
            <ng-container *ngIf="form.get('direccion')?.errors?.['required']">La dirección es obligatoria.</ng-container>
            <ng-container *ngIf="form.get('direccion')?.errors?.['minlength']">Mínimo 3 caracteres.</ng-container>
          </div>
        </div>
        <button type="submit" class="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition-colors disabled:opacity-50" [disabled]="form.invalid">
          Registrar
        </button>
      </form>
      <div *ngIf="resultado" class="mt-8">
        <h3 class="text-lg font-semibold mb-2 text-blue-700">Datos enviados:</h3>
        <pre class="bg-gray-100 p-4 rounded text-sm border border-gray-200 overflow-x-auto">{{ resultado | json }}</pre>
      </div>
    </div>
  `
})
export class RegistroComponent {
  form;
  resultado: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      edad: [null, [Validators.required, Validators.min(1)]],
      sexo: ['', Validators.required],
      nacionalidad: ['', [Validators.required, Validators.maxLength(20)]],
      direccion: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.resultado = this.form.value;
    } else {
      this.resultado = null;
      this.form.markAllAsTouched();
    }
  }
}
