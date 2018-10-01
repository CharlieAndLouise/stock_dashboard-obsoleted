import { Component, Input, SimpleChanges } from "@angular/core";
import { StockService } from "../injectors/StockService";
import { Quote } from "../models/index";

@Component({
    templateUrl: "StockQuote.html",
    selector: "quote"
})
export class StockQuoteComponent {
    @Input()
    symbol: string;
    quote: Quote = new Quote();

    constructor(private stockService: StockService) {
        
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