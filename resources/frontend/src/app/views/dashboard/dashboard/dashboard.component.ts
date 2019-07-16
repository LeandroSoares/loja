import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  orders;
  constructor(private orderService: CheckoutService) {
    this.orderService.index().subscribe(response => this.orders = response);
  }

  ngOnInit() {
  }

}
