import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes() : Observable<Hero[]> {
    // for(let i = 0; i < 1000_000_000;i++) {
    //     console.log(i)
    // }
    const heroes = of(HEROES)
    return heroes;
  }
}
