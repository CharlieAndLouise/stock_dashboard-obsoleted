import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
//import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HttpClientModule, HttpClientJsonpModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { StockSymbolTest } from '../components/StockSymbolTest';

@NgModule({
  declarations: [
    AppComponent,
    StockSymbolTest
  ],
  imports: [
    BrowserModule,
    //NgZorroAntdModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
