import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StoreComponent } from './store/store/store.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { UserManageComponent } from './dashboard/user-manage/user-manage.component';
import { BookManageComponent } from './dashboard/book-manage/book-manage.component';
import { AuthorManageComponent } from './dashboard/author-manage/author-manage.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';
import { HttpClientModule } from '@angular/common/http';

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
    DashboardComponent, NavbarComponent, UserManageComponent, BookManageComponent, AuthorManageComponent, AuthorListComponent, AuthorFormComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
