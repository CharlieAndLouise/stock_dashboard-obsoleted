import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { StockSymbol } from "../models/StockSymbol";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class StockService {
    constructor(private http: HttpClient) {

    }

    queryStockSymbol(ticker: string):Observable<StockSymbol[]> {
        if (ticker) {
            //{"symbol":"MSFT","name":"Microsoft Corporation","exch":"NAS","type":"S","exchDisp":"NASDAQ","typeDisp":"Equity"}
            return this.http.jsonp(`https://d.yimg.com/autoc.finance.yahoo.com/autoc?query=${ticker}&lang=en-us`, "callback").pipe(
                map((rawSymbols: any[])=>{
                    alert("L");
                    return rawSymbols.map( (rawSymbol)=> {                       
                        return {
                        symbol: rawSymbol.symbol,
                        name: rawSymbol.name,
                        exch: rawSymbol.exch,
                        type: rawSymbol.type,
                        exchDisp: rawSymbol.exchDisp,
                        typeDisp: rawSymbol.typeDisp
                    }});
                })
            );
        }
        else {
            return of<StockSymbol[]>([]);
        }     
    }
}