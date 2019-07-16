import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { StoreComponent } from './views/store/store/store.component';
import { DashboardComponent } from './views/dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './views/dashboard/navbar/navbar.component';
import { UserManageComponent } from './views/dashboard/user-manage/user-manage.component';
import { BookManageComponent } from './views/dashboard/book-manage/book-manage.component';
import { AuthorManageComponent } from './views/dashboard/author-manage/author-manage.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BookFormComponent } from './components/book-form/book-form.component';
import { AuthorSelectComponent } from './components/author-select/author-select.component';
import { BookSearchInputComponent } from './components/book-search-input/book-search-input.component';
import { CheckoutComponent } from './views/store/checkout/checkout.component';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { LoginComponent } from './views/dashboard/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor } from './services/jwt.interceptor';
import { DialogComponent } from './components/dialog/dialog.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { CheckoutOkComponent } from './views/store/checkout-ok/checkout-ok.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StoreComponent,
    DashboardComponent,
    NavbarComponent,
    UserManageComponent,
    BookManageComponent,
    AuthorManageComponent,
    AuthorFormComponent,
    BookFormComponent,
    AuthorSelectComponent,
    BookSearchInputComponent,
    CheckoutComponent,
    CartItemListComponent,
    BookCardComponent,
    LoginComponent,
    DialogComponent,
    UserFormComponent,
    CheckoutOkComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})

export class AppModule { }
