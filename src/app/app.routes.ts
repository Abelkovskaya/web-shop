import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';


export const routes: Routes = [
    { 
        path: '',
        component: MainPageComponent,
    },
    {
        path: 'product/:id',
        component: ProductPageComponent
    },
    {
        path: 'cart',
        component: CartPageComponent
    }
];
