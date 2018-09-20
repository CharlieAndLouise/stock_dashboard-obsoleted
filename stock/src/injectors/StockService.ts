import { Injectable, ComponentFactory } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Company, Chart } from "../models/index";


@Injectable()
export class StockService {
    constructor(private http: HttpClient) {

    }

    queryStockSymbol(symbol: string):Observable<Company> {
        if (symbol) {
            symbol = encodeURIComponent(symbol);
            //{"symbol":"AAPL","companyName":"Apple Inc.",
            //"exchange":"Nasdaq Global Select","industry":"Computer Hardware",
            //"website":"http://www.apple.com","description":"Apple Inc is designs, manufactures and markets mobile communication and media devices and personal computers, and sells a variety of related software, services, accessories, networking solutions and third-party digital content and applications.","CEO":"Timothy D. Cook","issueType":"cs","sector":"Technology","tags":["Technology","Consumer Electronics","Computer Hardware"]}
            return this.http.jsonp(`https://api.iextrading.com/1.0/stock/${symbol}/company`, "callback").pipe(
                map((resultCompany: Company)=> {
                    return resultCompany;
                }),
                catchError((error:any)=> {
                    return of <Company>(null);
                })
            );
        }
        else {
            return of<Company>(null);
        }     
    }

    queryStockChart(symbol: string, range: string): Observable<Chart[]> {
        return <Observable<Chart[]>>this.http.jsonp(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`, "callback");
    }
}