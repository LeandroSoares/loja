import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './views/store/store/store.component';
import { CheckoutComponent } from './views/store/checkout/checkout.component';
import { LoginComponent } from './views/dashboard/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard/dashboard.component';
import { UserManageComponent } from './views/dashboard/user-manage/user-manage.component';
import { AuthorManageComponent } from './views/dashboard/author-manage/author-manage.component';
import { BookManageComponent } from './views/dashboard/book-manage/book-manage.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { CheckoutOkComponent } from './views/store/checkout-ok/checkout-ok.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StoreComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'checkout-ok',
    component: CheckoutOkComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'dashboard/user',
    component: UserManageComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'dashboard/author',
    component: AuthorManageComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'dashboard/book',
    component: BookManageComponent,
    canActivate: [AfterLoginService]
  },

  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  declarations: []
  , exports: [RouterModule]
})
export class AppRoutingModule { }
