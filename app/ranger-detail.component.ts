import {Component} from 'angular2/core';
import {Ranger} from './ranger';

@Component({
    selector: 'my-ranger-detail',
    template: `
        <div *ngIf="ranger">
            <h2>{{ranger.name}} details!</h2>
            <div><label>level: </label>{{ranger.level}}</div>
            <div>
                <label>name: </label>
                <div><input [(ngModel)]="ranger.name" placeholder="name"></div>
            </div>
        </div>
`,
    inputs: ['ranger']
})
export class RangerDetailComponent {
    public ranger: Ranger;
}


