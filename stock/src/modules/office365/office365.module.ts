import { NgModule } from "@angular/core";
import { DropdownComponent } from "./components/Dropdown";
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [
        DropdownComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        DropdownComponent
    ]
})
export class Office365Module {}