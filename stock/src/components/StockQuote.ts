import { Component, Input, SimpleChanges, OnInit, OnChanges } from "@angular/core";
import { StockService } from "../injectors/StockService";
import { Quote } from "../models/index";
import { Brain } from "../injectors/Brain";
import { flatMap } from "rxjs/operators";

@Component({
    templateUrl: "StockQuote.html",
    selector: "quote"
})
export class StockQuoteComponent implements OnInit, OnChanges {
    @Input()
    symbol: string;
    quote: Quote = new Quote();

    constructor(private stockService: StockService, private brain: Brain) {
        
    }

    ngOnInit() {
        /*
        this.brain.selectSymbol.subscribe((symbol)=>{
            this.stockService.queryStock(this.symbol, "quote", "1m").subscribe(
                (response)=>{
                    this.quote = response.quote;
                }
            );
        });
        */

        this.brain.selectSymbol.pipe(
            flatMap((symbol)=>{
                return this.stockService.queryStock(symbol, "quote", "1m");
            })
        ).subscribe((response) => { this.quote = response.quote; } );
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.symbol.previousValue !== changes.symbol.currentValue) {
            this.stockService.queryStock(this.symbol, "quote", "1m").subscribe(
                (response)=>{
                    this.quote = response.quote;
                }
            );
        }
    }
}