import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RangerService {

    constructor(private _http: Http) { }


    getRangers() {
        return this._http.get('http://localhost:3000/rangers')
            .map(res => res.json());
    }

    getRanger(id: number) {
        return this._http.get('http://localhost:3000/rangers/' + id)
            .map(res => res.json());
    }
}


