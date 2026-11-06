import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Producto } from './producto';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class ProductoService {
    private uriBase = "http://localhost:8081/inventario-app/productos";
    private clienteHttp = inject(HttpClient);

    obtenerProductoLista(): Observable<Producto[]>{
        return this.clienteHttp.get<Producto[]>(this.uriBase);
    }
}
