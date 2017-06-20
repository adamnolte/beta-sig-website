import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})

export class FooterComponent implements OnInit {
    public year: number;
    constructor() { 
        this.year = new Date().getFullYear();
    }

    ngOnInit() { }
}