import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './component/cars/cars.component';
import { MastersComponent } from './component/masters/masters.component';
import { MenuComponent } from './component/menu/menu.component';
import { OrdersComponent } from './component/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'masters', component: MastersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
