import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  public updateForm: FormGroup;
  itemRef: any;
  constructor(
    public productsService: ProductsService,
    public formBuilder: FormBuilder,
    public activeRoute: ActivatedRoute,
    public router: Router
  ) {
    this.updateForm = this.formBuilder.group({
      nombre: [''],
      precio: [''],
      fecha: [''],
      desc: [''],
    });
  }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.productsService.getProductById(id).subscribe((res) => {
      this.itemRef = res;
      this.updateForm = this.formBuilder.group({
        nombre: [this.itemRef.nombre],
        precio: [this.itemRef.precio],
        fecha: [this.itemRef.fecha],
        desc: [this.itemRef.desc],
      });
    });
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.productsService.updateProduct(this.updateForm.value, id);
    this.router.navigate(['products']);
  }
}
