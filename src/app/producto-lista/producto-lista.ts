import { Component, inject } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto-service';

@Component({
  imports: [],
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.html',
})
export class ProductoLista {
  productos!: Producto[];

  private procuctoServicio = inject(ProductoService)

  ngOnInit(){
    //Carga los productos
    this.obtenerProductos();
  }

  private obtenerProductos():void{
    this.procuctoServicio.obtenerProductoLista().subscribe(
      {
        next: (datos) => {
          this.productos = datos;
        },
        error: (error) => {
          console.error("Errort al obtener los productos", error);
        }
      }
    );
  }
}
