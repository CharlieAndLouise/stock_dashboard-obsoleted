import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SymbolPalleteComponent, CompanyInfoComponent } from "@components/index";
import { StockService } from '../injectors/StockService';


@NgModule({
  declarations: [
    AppComponent,
    SymbolPalleteComponent,
    CompanyInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule  
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


