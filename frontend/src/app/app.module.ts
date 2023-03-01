import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { GoodsComponent } from './component/goods/goods.component';
import { GoodDetailComponent } from './component/goods/good-detail/good-detail.component';
import { NewGoodComponent } from './component/goods/new-good/new-good.component';
import { ServicesComponent } from './component/services/services.component';
import { NewServiceComponent } from './component/services/new-service/new-service.component';
import { ServiceDetailComponent } from './component/services/service-detail/service-detail.component';
import { HeadNavigationComponent } from './component/head-navigation/head-navigation.component';
import { OwnersComponent } from './component/owners/owners.component';
import { NewOwnerComponent } from './component/owners/new-owner/new-owner.component';
import { OwnerDetailComponent } from './component/owners/owner-detail/owner-detail.component';
import { HttpErrorInterceptor } from './service/http-error.interceptor';

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
    NewCarComponent,
    GoodsComponent,
    GoodDetailComponent,
    NewGoodComponent,
    ServicesComponent,
    NewServiceComponent,
    ServiceDetailComponent,
    HeadNavigationComponent,
    OwnersComponent,
    NewOwnerComponent,
    OwnerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
