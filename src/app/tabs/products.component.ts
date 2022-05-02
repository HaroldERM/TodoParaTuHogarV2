import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  Items: Item[];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.Items = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Item),
        };
      });
    });
  }
  deleteRow = (item) => this.productsService.deleteProduct(item);
}
