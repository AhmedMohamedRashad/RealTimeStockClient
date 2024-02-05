import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StocksComponent } from './stocks/stocks.component';
import { StockhistoryComponent } from './stockhistory/stockhistory.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateorderComponent } from './createorder/createorder.component';

const routes: Routes = [
  {path:'',redirectTo:'stocks',pathMatch:'prefix'},

  {path:'stocks',component:StocksComponent},
  {path:'stockhistory/:stockSymbol',component:StockhistoryComponent},
  {path:'orders',component:OrdersComponent},
  {path:'createorder',component:CreateorderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
