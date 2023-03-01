import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './component/cars/cars.component';
import { GoodsComponent } from './component/goods/goods.component';
import { MastersComponent } from './component/masters/masters.component';
import { MenuComponent } from './component/menu/menu.component';
import { OrdersComponent } from './component/orders/orders.component';
import { OwnersComponent } from './component/owners/owners.component';
import { ServicesComponent } from './component/services/services.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'owners', component: OwnersComponent },
  { path: 'masters', component: MastersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'goods', component: GoodsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
