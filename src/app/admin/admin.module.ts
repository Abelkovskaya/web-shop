import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPageComponent } from './add-page/add-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
            path: '', component: AdminLayoutComponent, children:[
                {
                    path: '', redirectTo: '/admin/login', pathMatch: 'full'
                },
                {
                    path: 'login', component: LoginPageComponent
                },
                {
                    path: 'dashboard', component: DashboardComponent
                },
                {
                    path: 'add', component: AddPageComponent
                },
                {
                    path: 'orders', component: OrdersPageComponent
                },
                {
                    path: 'product/:id/edit', component: EditPageComponent
                }
            ]
        }
    ])
  ],
  providers: [],
  bootstrap: [],
  exports: [
    RouterModule
  ]
})
export class AdminModule { 

}