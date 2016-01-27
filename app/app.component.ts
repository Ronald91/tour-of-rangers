import {Component} from 'angular2/core';

interface Ranger {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{ranger.name}} details!</h2>
        <div><label>id: </label>{{ranger.id}}</div>
        <div>
        <label>name: </label>
            <div><input [(ngModel)]="ranger.name" placeholder="name"></div>
        </div>
    `
})

export class AppComponent {
    public title = 'Tour of Rangers';

    public ranger: Ranger = {
        id: 6,
        name: 'Charizard'
    };
}