import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SymbolPalleteComponent, CompanyInfoComponent } from "@components/index";
import { StockService } from '../injectors/StockService';
import { Office365Module } from 'modules/office365/office365.module';


@NgModule({
  declarations: [
    AppComponent,
    SymbolPalleteComponent,
    CompanyInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    Office365Module
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




