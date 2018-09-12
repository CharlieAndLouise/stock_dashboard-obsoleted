import { Component } from '@angular/core';
import { MainModel } from '../models/MainModel';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    model: MainModel = new MainModel();

    constructor() {
        window["mainModel"] = this.model;
    }
}
