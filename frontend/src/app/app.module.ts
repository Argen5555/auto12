import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { OrderDetailComponent } from './component/orders/order-detail/order-detail.component';
import { OrdersComponent } from './component/orders/orders.component';
import { NewOrderComponent } from './component/orders/new-order/new-order.component';
import { MastersComponent } from './component/masters/masters.component';
import { MasterDetailComponent } from './component/masters/master-detail/master-detail.component';
import { NewMasterComponent } from './component/masters/new-master/new-master.component';
import { CarsComponent } from './component/cars/cars.component';
import { CarDetailComponent } from './component/cars/car-detail/car-detail.component';
import { NewCarComponent } from './component/cars/new-car/new-car.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrdersComponent,
    OrderDetailComponent,
    NewOrderComponent,
    MastersComponent,
    MasterDetailComponent,
    NewMasterComponent,
    CarsComponent,
    CarDetailComponent,
    NewCarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
