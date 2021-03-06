import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from  '@angular/forms';
// import {HttpClientModule} from '@angular/common/http';

import{HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService}  from './api/in-memory-data.service';

// App root
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {LoginComponent} from './login/login.component';
// Feature modules async
import {ProductModule} from './product/product.module';
// import {CartModule} from './cart/cart.module';
import {OrderModule} from './order/order.module';
import {UserModule} from './user/user.module';
import {LoginRoutingModule} from "./login/login-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,

    InMemoryWebApiModule.forRoot(InMemoryDataService),

    LoginRoutingModule,
    AppRoutingModule,

    ProductModule,
    // CartModule,
    OrderModule,
    UserModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  exports: [],
  providers: [], //global service
  bootstrap: [AppComponent]
})

export class AppModule {
}
