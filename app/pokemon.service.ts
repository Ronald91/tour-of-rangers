import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';

import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

    constructor(private _http: Http) { }

    getPokemon(name: string) {
        return this._http.get('http://pokeapi.co/api/v2/pokemon/' + name)
            .map(res => res.json());
    }
}


