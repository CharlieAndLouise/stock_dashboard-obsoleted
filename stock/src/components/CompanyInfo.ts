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
export class CompanyInfoComponent implements OnDestroy {

    company: Company = new Company();
    subscription: Subscription;

    constructor(private stockService: StockService, private brain: Brain) {
        this.subscription = this.brain.symbolSelected.pipe(
            flatMap((symbol)=>this.stockService.queryStockSymbol(symbol))
        ).subscribe((company)=>{
            this.company = company;
        });
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}

class Model {
    company: Company
}
