import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {RangerService} from './ranger.service';
import {Ranger} from './ranger';

@Component({
    selector: 'my-ranger-detail',
    templateUrl: 'app/ranger-detail.component.html',
    styleUrls: ['app/ranger-detail.component.css'],
    inputs: ['ranger']
})
export class RangerDetailComponent implements OnInit {
    public ranger: Ranger;

    constructor(
        private _rangerService: RangerService,
        private _routeParams: RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');

        this._rangerService.getRanger(id)
            .subscribe(ranger => this.ranger = ranger);
    }

    goBack() {
        window.history.back();
    }

    saveDetail(ranger: Ranger) {
        let body = JSON.stringify(ranger);
        let id = +this._routeParams.get('id');
        this._rangerService.updateRanger(id, body)
            .subscribe(ranger => this.ranger = ranger);

    }
}


