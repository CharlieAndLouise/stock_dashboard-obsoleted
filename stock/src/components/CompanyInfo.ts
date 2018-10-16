import { Component, Input, SimpleChanges, OnDestroy, OnInit } from "@angular/core";
import { Company } from "../models/Company";
import { StockService } from "../injectors/StockService";
import { Brain } from "../injectors/Brain";
import { flatMap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
    templateUrl: "CompanyInfo.html",
    selector: "company"
})
export class CompanyInfoComponent implements OnInit, OnDestroy {
    @Input()
    companyName: String;

    company: Company;
    subscription: Subscription;

    constructor(private stockService: StockService, private brain: Brain) {
        this.company = new Company();
    }

    ngOnInit() {
        this.subscription = this.brain.symbolSelected.pipe(
            flatMap((symbol)=>this.stockService.queryStockSymbol(symbol))
        ).subscribe((company)=>{
            this.company = company;
        });
    }
    /*
    ngOnChanges(changes: SimpleChanges) {
        if (changes.companyName.previousValue !== changes.companyName.currentValue) {
            this.stockService.queryStockSymbol(changes.companyName.currentValue).subscribe((company: Company)=> {
                this.company = company;              
            });
        }
    }
    */
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}

class Model {
    company: Company
}
