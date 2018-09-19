import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Company } from "../models/Company";
import { StockService } from "../injectors/StockService";

@Component({
    templateUrl: "CompanyInfo.html",
    selector: "company-info"
})
export class CompanyInfoComponent implements OnChanges {
    @Input()
    companyName: String;

    company: Company;

    constructor(private stockService: StockService) {
        this .company = new Company();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.companyName.previousValue !== changes.companyName.currentValue) {
            this.stockService.queryStockSymbol(changes.companyName.currentValue).subscribe((company: Company)=> {
                this.company = company;              
            });
        }
    }

}

class Model {
    company: Company
}
