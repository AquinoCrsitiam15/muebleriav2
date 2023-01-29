import { Component, OnInit } from '@angular/core';
import { PagwebinfoService } from 'src/app/services/pagwebinfo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  responsiveOptions: any;
  lstcategorias: any;
  lstproductos: any;
  ltsproductoscategoria: any;

  constructor(private pagwebService: PagwebinfoService) {}

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 5
      },
      {
        breakpoint: '1024px',
        numVisible: 4,
        numScroll: 4
      },
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
    this.pagwebService.getCategorias().subscribe((data:any)=>{
      this.lstcategorias = data.result;
      console.log(this.lstcategorias);
    });
    this.pagwebService.getProductos().subscribe((data:any)=>{
      this.lstproductos = data.result;
      console.log(this.lstproductos);
    });
  }

  cargardataporcategoria(categoria: CategoriaI){
    this.pagwebService.getProductbyIdCategoria(categoria.id).subscribe((data:any)=>{
      this.ltsproductoscategoria = data.result;
      console.log(this.ltsproductoscategoria);
    });
  }



}


export interface CategoriaI{
  id: number;
  nombre: string;
}
