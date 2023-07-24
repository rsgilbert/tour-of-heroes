import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounce, debounceTime, distinct, distinctUntilChanged, switchMap } from 'rxjs';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
    heroes$!: Observable<Hero[]>;
    // a subject is both a source of observable values and an Observable itself
    private searchTerms = new Subject<string>()

    constructor (private heroService: HeroService) {}

    search(term: string) : void {
        this.searchTerms.next(term)
    }

    ngOnInit(): void {
        this.heroes$ = this.searchTerms.pipe(
            // wait some milliseconds before considering the term
            debounceTime(300),
            // ignore new term if same as previous
            distinctUntilChanged(),
            // switch to new search observable each time the term changes
            switchMap((term: string) => this.heroService.searchHeroes(term))
        )
    }
}
