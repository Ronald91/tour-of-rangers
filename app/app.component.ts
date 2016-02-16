import {Component, OnInit} from 'angular2/core';
import {Ranger} from './ranger';
import {RangerDetailComponent} from './ranger-detail.component';
import {RangerService} from './ranger.service';


@Component({
    selector: 'my-app',
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .rangers {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 10em;
  }
  .rangers li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0em;
    height: 1.6em;
    border-radius: 4px;
  }
  .rangers li.selected:hover {
    color: white;
  }
  .rangers li:hover {
    color: #607D8B;
    background-color: #EEE;
    left: .1em;
  }
  .rangers .text {
    position: relative;
    top: -3px;
  }
  .rangers .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0em 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0px 0px 4px;
  }
`],
    template: `
        <h1>{{title}}</h1>
        <h2>My Rangers</h2>
        <ul class="rangers">
            <li *ngFor="#ranger of rangers" (click)="onSelect(ranger)" [class.selected]="ranger === selectedRanger">
                <span class="badge">{{ranger.level}}</span> {{ranger.name}}
            </li>
        </ul>
        <my-ranger-detail [ranger]="selectedRanger"></my-ranger-detail>
    `,
    directives: [RangerDetailComponent],
    providers: [RangerService]
})

export class AppComponent implements OnInit {
    public title = 'Tour of Rangers';
    rangers: Ranger[];
    public selectedRanger: Ranger;

    //Private variables are prefixed with _
    constructor(private _rangerService: RangerService) { }

    getRangers() {
        this._rangerService.getRangers().then(rangers=> this.rangers = rangers);
    }

    onSelect(ranger: Ranger) {
        this.selectedRanger = ranger;
    }

    ngOnInit() {
        this.getRangers();
    }

}
