/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component} from 'angular2/core';
import {RangersComponent} from './rangers.component';
import {DashboardComponent} from './dashboard.component';
import {RangerService} from './ranger.service';
import {PokemonService} from './pokemon.service';
import {RangerDetailComponent} from './ranger-detail.component'
import {NewRangerComponent} from './new-ranger.component'
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [RangerService, PokemonService, ROUTER_PROVIDERS],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

@RouteConfig([
    {
        path: '/rangers',
        name: 'Rangers',
        component: RangersComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'RangerDetail',
        component: RangerDetailComponent
    },
    {
        path: '/ranger',
        name: 'NewRanger',
        component: NewRangerComponent
    }
])

export class AppComponent {
    public title = 'Tour of Rangers';
}