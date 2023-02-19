import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDetailComponent } from './component/masters/master-detail/master-detail.component';
import { MastersComponent } from './component/masters/masters.component';
import { MenuComponent } from './component/menu/menu.component';
import { NewOrderComponent } from './component/orders/new-order/new-order.component';
import { OrderDetailComponent } from './component/orders/order-detail/order-detail.component';
import { OrdersComponent } from './component/orders/orders.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/new', component: NewOrderComponent },
  { path: 'orders/:id', component: OrderDetailComponent },
  { path: 'masters', component: MastersComponent },
  { path: 'masters/:id', component: MasterDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
