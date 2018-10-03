import { Component } from "@angular/core";

const templateString = `
<div class="grid-layout">
    <div class="menu">
    </div>
    <div class="left">
        <symbol-pallete></symbol-pallete>
        <router-outlet name="left"></router-outlet>
    </div>
    <div class="main">
        <router-outlet name="main"></router-outlet>
    </div>
    <div class="right"></div>
    <div class="console"></div>
</div>
`;

@Component({
    template: templateString
})
export class OneMainLayoutComponent {
    
}