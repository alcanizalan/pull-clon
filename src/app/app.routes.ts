import { Routes } from '@angular/router';
import {HeaderComponent} from './components/header/header.component'
import {ShopComponent} from './components/shop/shop.component'

export const routes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'shop', component: ShopComponent},
  {path: '', component: ShopComponent},
];
