import {Injectable} from 'angular2/core';
import {Ranger} from './ranger';
import {RANGERS} from './mock-rangers';

@Injectable()
export class RangerService {

    getRangers() {
        return Promise.resolve(RANGERS);
    }
    
    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<Ranger[]>(resolve =>
            setTimeout(() => resolve(RANGERS), 2000) // 2 seconds
        );
    }
}


