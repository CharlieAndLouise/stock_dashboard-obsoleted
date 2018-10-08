import { Injectable, Output, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";


@Injectable()
export class Brain {
    @Output()
    symbolSelected: EventEmitter<string> = new EventEmitter<string>();
    //symbolSelected: Subject<string> = new EventEmitter<string>();

    selectSymbol(symbol: string) {
        this.symbolSelected.emit(symbol);
    }
}