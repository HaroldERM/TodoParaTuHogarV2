import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from '../products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  public itemForm:FormGroup
  constructor(
    public productsService:ProductsService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.itemForm = this.formBuilder.group({
      nombre : [''],
      precio : [''],
      fecha : [''],
      desc : [''],
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    this.productsService.createProduct(this.itemForm.value)
    this.router.navigate([''])
  }
}