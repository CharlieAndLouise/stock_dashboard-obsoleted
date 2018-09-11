import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import { StockSymbol } from "../models/StockSymbol";
import { fromEvent, timer } from "rxjs";
import { switchMap, mergeMap } from "rxjs/operators";
import { StockService } from "../injectors/StockService";
import { Company } from "../models/Company";

@Component({
    templateUrl: "SymbolPallete.html"
})
export class SymbolPalletComponent implements OnInit {
    model: Model;
    
    @ViewChild("stockSearch") stockSymbolText: ElementRef;
    constructor(private stockService: StockService) {
        this.model = new Model();
    }

    ngOnInit() {
        fromEvent(this.stockSymbolText.nativeElement, "keyup").pipe(
            switchMap(
                ()=> {
                    return timer(500).pipe(
                        mergeMap(()=> this.stockService.queryStockSymbol(this.stockSymbolText.nativeElement.value))
                    )
                }
            )
        ).subscribe(
            (value: Company)=>{
                this.model.companies.push(value);            
            }, 
            (error)=> {
                //do nothing
            }
        );
    }
    
}

class Model {
    companies: Company[] = [];
}
