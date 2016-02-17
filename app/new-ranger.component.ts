/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component} from 'angular2/core';
import {Ranger} from './ranger';
import {NgForm}    from 'angular2/common';
import {RangerService} from './ranger.service';

@Component({
    selector: 'ranger-form',
    templateUrl: 'app/new-ranger.component.html',
    styleUrls: ['app/new-ranger.component.css']
})
export class NewRangerComponent {
     newRanger: Ranger;
    submitted = false;
    onSubmit() {
        this.submitted = true;
    }
    //TODO: Make use of http://pokeapi.co/ to do stuff like set the correct id in the background
}


