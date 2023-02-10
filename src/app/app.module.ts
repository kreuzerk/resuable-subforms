import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header.component";
import {EmployeeComponent} from "./employee/employee.component";
import {CompanyComponent} from "./company/company.component";
import {AddressComponent} from "./shared/address.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeaderComponent,
    EmployeeComponent,
    CompanyComponent,
    AddressComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
