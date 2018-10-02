import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { fromEvent, timer } from "rxjs";
import { switchMap, mergeMap } from "rxjs/operators";
import { StockService } from "../injectors/StockService";
import { Company } from "../models/Company";
import { LocalStorageAgent } from "../utilities/LocalStorage";
import { FAVORITE_STOCKS } from "../utilities/Constant";
import { Brain } from "../injectors/Brain";

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
    /*
    @Output()
    symbolSelected: EventEmitter<string> = new EventEmitter<string>();
    */

    model: Model;

    @ViewChild("stockSearch") stockSymbolText: ElementRef;

    constructor(private stockService: StockService, private brain: Brain) {
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
        ).subscribe(this.addStockSymbol);
        
        

		var storedSymbols = LocalStorageAgent.getItem(FAVORITE_STOCKS, "[]");
		this.model.companies = JSON.parse(storedSymbols);
	}

	private addStockSymbol = (value: Company) => {
		if (value) {

			const existingSymbol = this.model.companies.find((v) => v.symbol === value.symbol);
			if (!existingSymbol) {
				this.model.companies.push(value);
				const json = LocalStorageAgent.getItem(FAVORITE_STOCKS, "[]");
				let stockArray = JSON.parse(json);
				stockArray.push(value);
				LocalStorageAgent.setItem(FAVORITE_STOCKS, JSON.stringify(stockArray));
			}
		}
    }
    
    selectSymbol(company: Company) {
        //this.symbolSelected.emit(company.symbol);
        this.brain.selectSymbol.next(company.symbol);
    }
}

class Model {
    companies: Company[] = [];
}
