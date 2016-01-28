import {Component} from 'angular2/core';

interface Ranger {
    id: number;
    name: string;
    level: number;
}

@Component({
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
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Rangers</h2>
        <ul class="rangers">
            <li *ngFor="#ranger of rangers" (click)="onSelect(ranger)" [class.selected]="ranger === selectedRanger">
                <span class="badge">{{ranger.level}}</span> {{ranger.name}}
            </li>
        </ul>
        <div *ngIf="selectedRanger">
            <h2>{{selectedRanger.name}} details!</h2>
            <div><label>level: </label>{{selectedRanger.level}}</div>
            <div>
                <label>name: </label>
                <div><input [(ngModel)]="selectedRanger.name" placeholder="name"></div>
            </div>
        </div>
    `
})

export class AppComponent {
    public title = 'Tour of Rangers';

    public selectedRanger: Ranger;

    public rangers = RANGERS;

    onSelect(ranger: Ranger) {
        this.selectedRanger = ranger;
    }

}

var RANGERS: Ranger[] = [
    { id: 6, name: 'Charizard', level: 50 },
    { id: 160, name: 'Feraligatr', level: 48 },
    { id: 149, name: 'Dragonite', level: 62 },
    { id: 373, name: 'Salamence', level: 58 },
    { id: 65, name: 'Alakazam', level: 65 },
    { id: 150, name: 'Mewtwo ', level: 72 },
    { id: 635, name: 'Hydreigon', level: 68 },
    { id: 244, name: 'Entei', level: 60 },
    { id: 249, name: 'Lugia', level: 61 },
    { id: 151, name: 'Mew', level: 51 }
];