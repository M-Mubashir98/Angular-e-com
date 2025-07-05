import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';

export const routes: Routes = [
    {
        path:'',
        loadComponent:()=>{
            //return (import("./Component/header/header").then((m)=>Header))
            return (import("./pages/product-list/product-list").then((m)=>ProductList))
        }
    },
    {
        path:'cart',
        loadComponent:()=>{
            return(import("./pages/cart-component/cart-component").then((c)=>c.CartComponent))
        }
        //component:CartComponent
    }

];
