import {Component} from 'angular2/core';

interface Ranger {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Rangers</h2>
        <ul class="rangers">
            <li *ngFor="#ranger of rangers">\n\
                <span class="badge">{{ranger.id}}</span> {{ranger.name}}
            </li>
        </ul>
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

    public rangers = RANGERS;

}

var RANGERS: Ranger[] = [
    { id: 6, name: 'Charizard' },
    { id: 160, name: 'Feraligatr' },
    { id: 149, name: 'Dragonite' },
    { id: 373, name: 'Salamence' },
    { id: 65, name: 'Alakazam' },
    { id: 150, name: 'Mewtwo ' },
    { id: 635, name: 'Hydreigon' },
    { id: 244, name: 'Entei' },
    { id: 249, name: 'Lugia' },
    { id: 151, name: 'Mew' }
];