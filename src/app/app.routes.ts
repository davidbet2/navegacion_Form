
import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CatalogoComponent } from './catalogo.component';
import { ProductoComponent } from './producto.component';
import { RegistroComponent } from './registro.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'catalogo', component: CatalogoComponent },
	{ path: 'producto', component: ProductoComponent },
	{ path: 'registro', component: RegistroComponent },
];
