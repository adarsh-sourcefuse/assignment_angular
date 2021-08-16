import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ElementComponent } from './table/element/element.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './table/customer/customer.component'
 import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'table',component:TableComponent},
  {path:'users/:userId',component:CustomerComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ElementComponent,
    CustomerComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
