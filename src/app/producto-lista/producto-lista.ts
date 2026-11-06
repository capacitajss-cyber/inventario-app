import { ChangeDetectorRef, Component, inject, NgZone, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto-service';

@Component({
  selector: 'app-producto-lista',
  standalone:true, // Asegúrate de incluir esto si estás usando Angular moderno (v14+)
  imports: [],
  templateUrl: './producto-lista.html',
})
export class ProductoLista implements OnInit {
  productos!: Producto[];// Es mejor inicializar como array vacío para evitar errores en la plantilla


  private procuctoServicio = inject(ProductoService)
  private cdr = inject(ChangeDetectorRef); // Mantenemos la consistencia usando inject()

  ngOnInit(){
    //Carga los productos
    console.log('Cargando los productos...');
    this.obtenerProductos();
  }

  

  private obtenerProductos(): void {
    this.procuctoServicio.obtenerProductoLista().subscribe({
        next: (datos) => {
          this.productos = datos;
          console.log('Productos cargados con éxito:', this.productos);
        
          // ¡Aquí es donde debes avisar a Angular! 
          // Se ejecuta justamente cuando los datos de Spring Boot ya llegaron.
          this.cdr.markForCheck(); 
        },
        error: (error) => {
          console.error("Errort al obtener los productos",error)
        }
      }
    );
  }
}
