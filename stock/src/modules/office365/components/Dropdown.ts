import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges } from "@angular/core";

const templateHtml = `
<div #dropdown class="ms-Dropdown" tabindex="0">
  <i class="ms-Dropdown-caretDown ms-Icon ms-Icon--ChevronDown"></i>
  <select class="ms-Dropdown-select">
    <option *ngFor="let item of options" [value]="item.id">{{item.text}}</option>
  </select>
</div>
`;

@Component({
    template: templateHtml,
    selector: "dropdown365"
})
export class DropdownComponent implements OnInit, AfterViewInit {
    
    @ViewChild("dropdown")
    dropdownDiv: ElementRef;

    @Input()
    options: Array<{id:string, text: string}>;

    thisControl: any;

    ngOnInit() {

    }

    ngAfterViewInit() {
        this.thisControl = new window["fabric"]["Dropdown"](this.dropdownDiv.nativeElement);
        window["thisControl"] = this.thisControl;
    }
}
