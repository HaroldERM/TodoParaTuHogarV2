import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register-login-auth/register.component';
import { LoginComponent } from './register-login-auth/login.component';
import { PasswordComponent } from './register-login-auth/password.component';
import { TabsComponent } from './tabs/tabs.component';
import { AboutUsComponent } from './tabs/about-us.component';
import { ProductsComponent } from './tabs/products.component';
import { AddProductComponent } from './tabs/add-product.component';
import { UpdateProductComponent } from './tabs/update-product.component';
import { CartComponent } from './tabs/cart.component';

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PasswordComponent,
    TabsComponent,
    AboutUsComponent,
    ProductsComponent,
    AddProductComponent,
    UpdateProductComponent,
    CartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
