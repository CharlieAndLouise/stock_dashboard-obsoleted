import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MainModel } from '../models/MainModel';

@Component({
    selector: "app-root",
    template: "<router-outlet></router-outlet>"
})
export class AppComponent implements OnInit {
    
    constructor(private router: Router) {}

    ngOnInit() {
        //this.router.navigate(["OneMain", { outlet: { main: "quote" }}])
    }
    
}
