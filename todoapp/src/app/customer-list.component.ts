import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Customers } from "./types/customer";

@Component({
  selector: 'app-customer-list',
  template: `
    <ul>
      <li *ngFor="let item of customers">
        <label>
          {{ item.fullName }}<br>
          {{item.email}}
        </label>
        <a routerLink="/{{ item.id }}/details">Details</a>
      </li>
    </ul>
  `
})
export class CustomerListComponent {
  @Input()
  customers: Customers = [];
  }

