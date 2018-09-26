import { Component } from '@angular/core';
import { MainModel } from '../models/MainModel';

@Component({
    selector: "app-root",
    templateUrl: "app.component.html"
})
export class AppComponent {
    model: MainModel = new MainModel();

    constructor() {
    }

    options = [
        {id: 1, text: "apple"},
        {id: 2, text: "orange"},
        {id: 3, text: "banana"}
    ];

    selectStockSymbol(stockSymbol: string) {
        this.model.selectedStockSymbol = stockSymbol;
    }
}
