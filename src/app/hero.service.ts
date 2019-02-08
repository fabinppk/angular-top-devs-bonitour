import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  setHeaders() {
    let headers = new HttpHeaders()
    .set("Accept", "application/json")
    .set("Content-Type", "application/json")
    .set("secret_key", "vSMtK8VnNI97RGxrEFM2Dg")
    .set("Authorization", "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRpQGJvbml0b3VyLmNvbS5iciIsImV4cCI6MTU3OTA5MDg3M30.eyLkJgU6YKSuX5HQjuW3oCfl7GEpkKf_mGlQnVod7bY");
    return headers;
  }

  getResources(){
    const apiUrl = "https://api.bonitour.com.br/api/v3/devs";
    const headers = this.setHeaders();
    return this.http.get<Hero[]>(apiUrl, {headers});
  }

  getHeroes(): Observable<Hero[]> {
    //this.messageService.clear();
    //this.messageService.add('HeroService: fetched heroes');
    console.log("AQUI", HEROES);
    return of(HEROES);
  }

  getResourceHero(nome: string){
    const apiUrlDev = `https://api.bonitour.com.br/api/v3/dev/${nome}`;
    const nomeNoSlug = `${nome}`.replace('-', ' ').toUpperCase();
    this.messageService.add(`HeroService: fetched ${nomeNoSlug}`);
    const headers = this.setHeaders();
    return this.http.get<Hero[]>(apiUrlDev, {headers});
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  onSelect(hero): Observable<Hero[]> {
    let msg = 'Clicked on ' + hero.name;
    //this.messageService.clear();
    this.messageService.add(msg);
    return of(HEROES);
  }
}
