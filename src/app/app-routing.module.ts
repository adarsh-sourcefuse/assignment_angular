import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ElementComponent } from './table/element/element.component';
import {HttpClientModule} from '@angular/common/http';
import { CustomerComponent } from './table/customer/customer.component'
const routes: Routes = [
  //{path:'',component:AppComponent},
  //{path:'users',component:CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
