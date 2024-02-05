import { Component } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders:any[]=[];
  constructor(private _OrdersService:OrdersService) { }
  
  ngOnInit(): void {
    this._OrdersService.getOrders().subscribe((response)=>{
      this.orders = response.data;
    })
  }
}
