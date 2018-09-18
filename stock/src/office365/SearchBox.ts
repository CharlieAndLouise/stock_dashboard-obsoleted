import { Component } from "@angular/core";

const template = `
<div class="ms-SearchBox">
<input class="ms-SearchBox-field" type="text" value="">
<label class="ms-SearchBox-label">
    <i class="ms-SearchBox-icon ms-Icon ms-Icon--Search"></i>
    <span class="ms-SearchBox-text">Search</span> 
</label>
<div class="ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel">
    <button class="ms-CommandButton-button">
        <span class="ms-CommandButton-icon"><i class="ms-Icon ms-Icon--Clear"></i></span> 
        <span class="ms-CommandButton-label"></span> 
    </button>
</div>
</div>
`;

@Component({
    template: template,
    
})