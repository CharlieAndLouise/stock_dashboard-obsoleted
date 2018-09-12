import { Component } from "@angular/core";
import { Company } from "../models/Company";
/*
@Component({
    templateUrl: "CompanyInfo.html",
    selector: "company-info"
})
*/
export class CompanyInfoComponent {
    model: Model = new Model();
    constructor() {}

    
}

class Model {
    company: Company
}
