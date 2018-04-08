import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Comp2Component } from './comp2/comp2.component';
import {Search} from "./search.service";
import { UsersCmpComponent } from './users-cmp/users-cmp.component';
import { UsersDetailComponent } from './users-detail/users-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp2Component,
    UsersCmpComponent,
    UsersDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
  ],
  providers: [Search],
  bootstrap: [AppComponent]
})
export class AppModule { }
