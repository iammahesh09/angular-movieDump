import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shared',
    template: `
        <h2>Hello! {{title}}</h2>

                <app-parent></app-parent>
            
    `
})
export class SharedComponent implements OnInit {
    title: string = "Shared Component"
    constructor() { }

    ngOnInit() {
    }

}
