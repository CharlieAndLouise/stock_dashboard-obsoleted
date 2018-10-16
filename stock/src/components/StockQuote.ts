import { Component, Input, SimpleChanges, OnInit, OnChanges, OnDestroy } from "@angular/core";
import { StockService } from "../injectors/StockService";
import { Quote } from "../models/index";
import { Brain } from "../injectors/Brain";
import { flatMap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
    templateUrl: "StockQuote.html",
    selector: "quote"
})
export class StockQuoteComponent implements OnDestroy {
    @Input()
    symbol: string;
    quote: Quote = new Quote();

    subscription: Subscription;

    constructor(private stockService: StockService, private brain: Brain) {
        this.subscription = this.brain.symbolSelected.pipe(
            flatMap((symbol)=>{
                return this.stockService.queryStock(symbol, "quote", "1m");
            })
        ).subscribe((response) => { 
            this.quote = response.quote;
            this.symbol = this.quote.symbol; 
        } );
    }
    /*
    ngOnChanges(changes: SimpleChanges) {
        if (changes.symbol.previousValue !== changes.symbol.currentValue) {
            this.stockService.queryStock(this.symbol, "quote", "1m").subscribe(
                (response)=>{
                    this.quote = response.quote;
                }
            );
        }
    }
    */

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}