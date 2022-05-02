import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Item } from './item.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private angularFirestore: AngularFirestore) {}

  getProducts() {
    return this.angularFirestore.collection('items').snapshotChanges();
  }

  getProductById(id) {
    return this.angularFirestore.collection('items').doc(id).valueChanges();
  }

  createProduct(product: Item) {
    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('items')
        .add(product)
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  updateProduct(product: Item, id) {
    return this.angularFirestore.collection('items').doc(id).update({
      nombre: product.nombre,
      precio: product.precio,
      fecha: product.fecha,
      desc: product.desc,
    });
  }
  deleteProduct(product) {
    return this.angularFirestore.collection('items').doc(product.id).delete();
  }
}
