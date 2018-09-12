import { Component, ElementRef, ViewChild, OnInit, Input } from "@angular/core";
import { fromEvent, timer } from "rxjs";
import { switchMap, mergeMap } from "rxjs/operators";
import { StockService } from "../injectors/StockService";
import { Company } from "../models/Company";

@Component({
    templateUrl: "SymbolPallete.html",
    selector: "symbol-pallete"
})
export class SymbolPalleteComponent implements OnInit {

    get stockList() {
        return this.model.companies;
    }
    @Input()
    set stockList(stocks: Company[]) {
        this.model.companies = stocks;
    }



    model: Model;

    @ViewChild("stockSearch") stockSymbolText: ElementRef;
    constructor(private stockService: StockService) {
        this.model = new Model();
    }

    ngOnInit() {
        fromEvent(this.stockSymbolText.nativeElement, "keyup").pipe(
            switchMap(
                () => {
                    return timer(500).pipe(
                        mergeMap(() => this.stockService.queryStockSymbol(this.stockSymbolText.nativeElement.value))
                    );
                }
            )
        ).subscribe(
            (value: Company) => {
                if (value) {
                    const existingSymbol = this.model.companies.find((v)=> v.symbol == value.symbol);
                    if (!existingSymbol) {
                        this.model.companies.push(value);
                    }
                }
            }
        );
    }
}

class Model {
    companies: Company[] = [];
}
