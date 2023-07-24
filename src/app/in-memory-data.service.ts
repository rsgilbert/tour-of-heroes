import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const heroes: Hero[] = [
            {
                id: 1,
                name: 'Superman'
            },
            {
                id: 2,
                name: 'Spiderman'
            },
            {
                id: 3,
                name: 'One punch man'
            },
            {
                id: 4,
                name: 'Naruto'
            }
        ]
        return { heroes };
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1: 11
    }
}
