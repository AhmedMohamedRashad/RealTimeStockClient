import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private _HttpClient:HttpClient) { }
  getStocks():Observable<any>
  {
    return this._HttpClient.get(`https://localhost:7091/api/Stocks/GetStocks`)
  }
  getHistoryBySymbol(stockSymbol:string):Observable<any>
  {
    return this._HttpClient.get(`https://localhost:7091/api/Stocks/GetHistoryBySymbol/${stockSymbol}`)
  }
  
}
