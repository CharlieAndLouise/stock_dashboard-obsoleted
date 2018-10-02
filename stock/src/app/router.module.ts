import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import * as myComponents from "@components/_index";
import { AppComponent } from "./app.component";
import { componentNeedsResolution } from "@angular/core/src/metadata/resource_loading";

const routes: Routes = [
    { path: "home", component: myComponents.OneMainLayoutComponent, children: [
        { path: "quote", component: myComponents.StockQuoteComponent, outlet: "main" },
        { path: "info", component: myComponents.CompanyInfoComponent, outlet: "main" }
    ]}    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule {
    
}