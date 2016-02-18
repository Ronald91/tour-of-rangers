/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component} from 'angular2/core';
import {Ranger} from './ranger';
import {RangerService} from './ranger.service';
import {PokemonService} from './pokemon.service';



@Component({
    selector: 'ranger-form',
    templateUrl: 'app/new-ranger.component.html',
    styleUrls: ['app/new-ranger.component.css']
})
export class NewRangerComponent {
    newRanger: Ranger = { id: null, name: "", level: null };
    returnedPokemon: Ranger;

    constructor(private _rangerService: RangerService,
        private _pokemonService: PokemonService) { }

    onSubmit() {
        //Call the pokemon service to get the actual id of the pokemon
        var pokeApiRequestName = this.newRanger.name.toLowerCase();

        this.saveNewRanger(this.newRanger,this._pokemonService.getPokemon(pokeApiRequestName)
            .subscribe(pokemon => this.returnedPokemon = pokemon)) ;


    }
    saveNewRanger(newRanger:Ranger,Subscription){
        //TODO: Figure out how to get the response of the subscribe to then use as a parameter for the other api
        newRanger.id = Subscription;
            let body = JSON.stringify(newRanger);
            this._rangerService.newRanger(body)
                .subscribe(ranger => newRanger = ranger);
            window.alert("Ranger created")
    }
}


