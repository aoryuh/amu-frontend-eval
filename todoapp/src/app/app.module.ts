import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {AppComponent} from "./app.component";
import {ReactiveFormsModule} from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import {CustomerListPageComponent} from "./pages/customer-list-page.component";
import {CustomerListComponent} from "./customer-list.component";
import {CustomersService} from "./api/customers.service";


const routes: Routes = [
  { path: '', component: CustomerListPageComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    CustomerListPageComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
