import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import  {WhoWeAre} from './whoweare';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    public whoWeAre: string;

    constructor(router: Router) {
        this.whoWeAre = WhoWeAre;

        //Current Workaround
        //https://stackoverflow.com/questions/36101756/angular2-routing-with-hashtag-to-page-anchor
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                const element = document.querySelector("#" + tree.fragment);
                if (element) { element.scrollIntoView(element); }
                }
            }
            });
     }

    ngOnInit() { }
}