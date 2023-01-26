import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagwebinfoService {
  
  apiUrl = 'https://apimueblesoscanoa.azurewebsites.net/api/webpagina/';

  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get(this.apiUrl+'Categorias');
  }
  getImagenes(){
    return this.http.get(this.apiUrl+'TodosImagenes');
  }
  getProductos(){
    return this.http.get(this.apiUrl+'TodosProductos');
  }
  getProduct(id: number){
    return this.http.get(this.apiUrl+'Producto/'+id);
  }
  getProductbyIdCategoria(id: number){
    return this.http.get(this.apiUrl+'Producto/'+id);
  }
}
