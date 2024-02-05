import { OrdersService } from './../orders.service';
import { StocksService } from './../stocks.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.scss']
})
export class CreateorderComponent {
  stocksTypes:any[]=[];
  orderTypes:any[]=[];
  error: string = '';

  constructor(private _Router: Router,private _OrdersService:OrdersService,private _StocksService:StocksService){}
  orderForm = new FormGroup(
    {
      quantity:new FormControl(null),
      orderTypeId:new FormControl(null),
      stockSymbol:new FormControl(null),
    }
  )
  submitOrderForm(OrderForm:FormGroup){
    this._OrdersService.createOrder(OrderForm.value).subscribe((response)=>{
      if(response.message == 'success')
      {
        this._Router.navigate(['/orders'])
      }
      else
      {
        this.error = response.errors.email.message;
      }
    })
    
  }
  

  ngOnInit(): void {
    this._StocksService.getStocks().subscribe((response)=>{
      this.stocksTypes = response.data;
    });
    this._OrdersService.getOrderTypes().subscribe((response)=>{
      this.orderTypes = response.data;
    });
  }




}
