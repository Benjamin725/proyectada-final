import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-producto',
  imports: [NgClass],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {
  nombre: string = 'Bentru7';
  usuario: string = '@bentru7';
  urlFoto: string = 'https://picsum.photos/seed/perfil/120/120';
  estaOnline: boolean = true;

  // Alterna el estado online/offline
  toggleOnline(): void {
    this.estaOnline = !this.estaOnline;
  }
}

