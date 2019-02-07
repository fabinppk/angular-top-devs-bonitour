import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.clear();
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  onSelect(hero): Observable<Hero[]> {
    let msg = 'Clicked on ' + hero.name;
    this.messageService.clear();
    this.messageService.add(msg);
    return of(HEROES);
  }
}
