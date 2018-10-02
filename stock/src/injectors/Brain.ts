import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class Brain {
    selectSymbol: Subject<string>;
    
    constructor() {
        this.selectSymbol = new Subject();
    }
}