import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private _HttpClient:HttpClient) { }
  getOrders():Observable<any>
  {
    return this._HttpClient.get(`https://localhost:7091/api/Orders/GetOrders`)
  }
  getOrderTypes():Observable<any>
  {
    return this._HttpClient.get(`https://localhost:7091/api/Orders/GetOrderTypes`)
  }
  createOrder(formData: any): Observable<any> {
    return this._HttpClient.post("https://localhost:7091/api/Orders/Create", formData);
   
  }
  
}
