import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'app-login',
    component: LoginComponent,
  },
  {
    path: 'app-product-details/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'app-register',
    component: RegisterComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
