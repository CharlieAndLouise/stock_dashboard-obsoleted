import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { StockService } from '../injectors/StockService';
import { Brain } from '../injectors/Brain';
import { RoutingModule } from './router.module';

import * as myComponents from "@components/_index"


export function getAllComponents(componentPackage: any) {
  var result = [];
  for (var key of componentPackage) {
    result.push(componentPackage[key]);
  }
  return result;
}




@NgModule({
  declarations: [
    AppComponent,
    myComponents.OneMainLayoutComponent,
    myComponents.SymbolPalleteComponent,
    myComponents.CompanyInfoComponent,
    myComponents.StockQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RoutingModule
  ],
  providers: [
    StockService,
    Brain
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




