import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register-login-auth/register.component';
import { LoginComponent } from './register-login-auth/login.component';
import { PasswordComponent } from './register-login-auth/password.component';
import { AboutUsComponent } from './tabs/about-us.component';
import { ProductsComponent } from './tabs/products.component';
import { AddProductComponent } from './tabs/add-product.component';
import { UpdateProductComponent } from './tabs/update-product.component';
import { CartComponent } from './tabs/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'aboutUs', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'updateProduct/:id', component: UpdateProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '**', redirectTo: 'aboutUs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
