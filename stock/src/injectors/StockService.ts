import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { StockSymbol } from "../models/StockSymbol";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable()
export class StockService {
    constructor(private http: HttpClient) {

    }

    queryStockSymbol(ticker: string):Observable<StockSymbol[]> {
        //alert("SF2");
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append("Access-Control-Allow-Credentials", "true");
        headers = headers.append("Access-Control-Allow-Origin", "*");
        headers = headers.append("Authorization", "Bearer SGTYf6eL5psw7G2ZGELyaiMCBi9N");
        //headers = headers.append("Content-Type", "text/plain");

        if (ticker) {
            //{"symbol":"MSFT","name":"Microsoft Corporation","exch":"NAS","type":"S","exchDisp":"NASDAQ","typeDisp":"Equity"}
            return this.http.get(`https://sandbox.tradier.com/v1/markets/lookup?q=${ticker}`, {
                //withCredentials: true, 
                headers: headers
            }).pipe(
                map((rawSymbols: any[])=> {
                    return rawSymbols.map( (rawSymbol)=> {
                        return {
                            symbol: rawSymbol.symbol,
                            name: rawSymbol.description,
                            exch: rawSymbol.exchange,
                            type: rawSymbol.type
                        }
                    });
                })
            );        
        }
        else {
            return of<StockSymbol[]>([]);
        }     
    }
}