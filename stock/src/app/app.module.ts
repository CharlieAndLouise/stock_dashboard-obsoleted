import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { SymbolPalleteComponent } from '../components/SymbolPallete';
//import { CompanyInfoComponent } from "../components/CompanyInfo";
import { StockService } from '../injectors/StockService';


@NgModule({
  declarations: [
    AppComponent,
    SymbolPalleteComponent,
    //CompanyInfoComponent
  ],
  imports: [
    BrowserModule,
  //  BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule  
  ],
  providers: [
    StockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


