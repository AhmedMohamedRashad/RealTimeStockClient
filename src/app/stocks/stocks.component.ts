import { StocksService } from './../stocks.service';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent {
  stocks:any[]=[];
  private hubConnectionBuilder!: HubConnection;
  constructor(private _StocksService:StocksService) { }
  
  ngOnInit(): void {
    this._StocksService.getStocks().subscribe((response)=>{
      this.stocks = response.data;
    });
    this.hubConnectionBuilder = new HubConnectionBuilder()
      .withUrl('https://localhost:7091/stocks')
      .configureLogging(LogLevel.Information)
      .build();
    this.hubConnectionBuilder
      .start()
      .then(() => console.log('Connection started.......!'))
      .catch(err => console.log('Error while connect with server'));
    this.hubConnectionBuilder.on('SendOffersToUser', (result: any) => {
      this._StocksService.getStocks().subscribe((response)=>{
        this.stocks = response.data;
       // alert("stock updated");
      });
    });
    
  }

}
