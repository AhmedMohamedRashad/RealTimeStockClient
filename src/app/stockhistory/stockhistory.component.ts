import { StocksService } from './../stocks.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-stockhistory',
  templateUrl: './stockhistory.component.html',
  styleUrls: ['./stockhistory.component.scss']
})
export class StockhistoryComponent {
  historylist:any[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _StationService:StocksService) { }
  
  ngOnInit(): void {
    this._StationService.getHistoryBySymbol(this._ActivatedRoute.snapshot.params['stockSymbol']).subscribe((response)=>{
      this.historylist = response.data;
    })
  }

}
