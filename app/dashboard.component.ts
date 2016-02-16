/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit} from 'angular2/core';
import {Ranger} from './ranger';
import {RangerService} from './ranger.service';
import { Router } from 'angular2/router';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    rangers: Ranger[] = [];

    constructor(
        private _router: Router,
        private _rangerService: RangerService) { }

    ngOnInit() {
        //Display the 5 highest level rangers in the dashboard
        this._rangerService.getRangers()
            .subscribe(rangers => this.rangers =
                rangers
                    .sort(function(a, b) { return b.level - a.level })
                    .slice(0, 4));
    }

    gotoDetail(ranger: Ranger) {
        let link = ['RangerDetail', { id: ranger.id }];
        this._router.navigate(link);
    }


}


