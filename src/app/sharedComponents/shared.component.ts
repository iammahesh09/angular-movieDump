import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shared',
    template: `
        <h2>Hello! {{title}}</h2>
        <div class="row">
            <div class="col-sm">
                <app-parent></app-parent>
            </div>
            <div class="col-sm">
                <app-child></app-child>
            </div>
        </div>

                
            
    `
})
export class SharedComponent implements OnInit {
    title: string = "Shared Component"
    constructor() { }

    ngOnInit() {
    }

}
