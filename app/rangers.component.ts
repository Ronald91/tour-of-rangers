import {Component, OnInit} from 'angular2/core';
import {Ranger} from './ranger';
import {RangerDetailComponent} from './ranger-detail.component';
import {RangerService} from './ranger.service';
import { Router } from 'angular2/router';



@Component({
    selector: 'my-rangers',
    styleUrls: ['app/rangers.component.css'],
    templateUrl: 'app/rangers.component.html',
    directives: [RangerDetailComponent]
})

export class RangersComponent implements OnInit {
    public title = 'Rangers List';
    rangers: Ranger[];
    public selectedRanger: Ranger;

    //Private variables are prefixed with _
    constructor(
        private _router: Router,
        private _rangerService: RangerService) { }

    getRangers() {
        this._rangerService.getRangers().subscribe(rangers => this.rangers = rangers);
    }

    onSelect(ranger: Ranger) {
        this.selectedRanger = ranger;
    }

    ngOnInit() {
        this.getRangers();
    }

    gotoDetail() {
        let link = ['RangerDetail', { id: this.selectedRanger.id }];
        this._router.navigate(link);
    }

}
