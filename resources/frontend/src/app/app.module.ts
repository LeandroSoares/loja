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
import { HttpClientModule } from '@angular/common/http';
import { BookFormComponent } from './components/book-form/book-form.component';
import { AuthorSelectComponent } from './components/author-select/author-select.component';
import { BookSearchInputComponent } from './components/book-search-input/book-search-input.component';

const appRoutes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/user', component: UserManageComponent },
  { path: 'dashboard/author', component: AuthorManageComponent },
  { path: 'dashboard/book', component: BookManageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    StoreComponent,
    DashboardComponent, NavbarComponent, UserManageComponent, BookManageComponent, AuthorManageComponent, AuthorFormComponent, BookFormComponent, AuthorSelectComponent, BookSearchInputComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
