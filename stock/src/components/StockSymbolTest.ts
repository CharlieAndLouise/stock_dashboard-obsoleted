import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { StockSymbol } from "../models/StockSymbol";
import { fromEvent, timer } from "rxjs";
import { StockService } from "../injectors/StockService";
import { switchMap, mergeMap, flatMap } from "rxjs/operators";

@Component({
    templateUrl: "StockSymbolTest.html",
    selector: "stockSymbolTest",
    providers: [ StockService ]
})
export class StockSymbolTest implements OnInit {
    model:StockSymbolModel;
    

    @ViewChild("stockSearch") stockSymbolText: ElementRef;

    constructor(private stockService: StockService) {
        this.model = new StockSymbolModel();
    }

    ngOnInit() {
        fromEvent(this.stockSymbolText.nativeElement, "keyup").pipe(
            switchMap(
                ()=> {
                    return timer(500).pipe(
                        mergeMap(()=> this.stockService.queryStockSymbol("msft"))
                    )
                }
            )
        ).subscribe((value)=>{
            alert(value);
            this.model.stockList = value;
        });
    }
}

class StockSymbolModel {
    stockText: string;
    stockList: StockSymbol[];

    constructor() {
        this.stockList = [];
        this.stockText = "";
    }
}
