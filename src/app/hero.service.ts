import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';
import { Observable, catchError, of, tap } from 'rxjs'
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    // :base/:collectionName
    private heroesUrl = 'api/heroes'
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    constructor(
        private http: HttpClient,
        private messageService: MessageService) { }

    
    
    getHeroes(): Observable<Hero[]> {
        // const heroes = of(HEROES)
        // this.log('HeroService: fetched heroes')
        // return heroes;
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(d => this.log(`fetched ${d.length} heroes`)),
                catchError(this.handleError('getHeroes', [{
                id: 1000,
                name: 'Failure!!'
            }])))
    }

    getHero(id: number): Observable<Hero | undefined> {
        const url = `${this.heroesUrl}/${id}`
        return this.http.get<Hero>(url).pipe(
            tap(_ => this.log(`Fetched hero, id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        )
        // const hero = HEROES.find(h => h.id === id)
        // this.log(`HeroService: fetched a single hero with id ${id}`)
        // return of(hero)
    }

    searchHeroes(term: string) : Observable<Hero[]> {
        if(!term.trim()) {
            return of([])
        }
        return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`)
            .pipe(
                tap(x => x.length ? 
                    this.log(`found heroes matching ${term}`)
                    : this.log(`no heroes matching ${term}`)
            ),
            catchError(this.handleError<Hero[]>('searchHeroes', [])))
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any) : Observable<T> => {
            this.log(`${operation} failed: ${error.message}`)

            // let the app keep running by return an empty array
            return of(result as T)
        }
    }

    private log(message: string) {
        this.messageService.add(message)
    }
}
