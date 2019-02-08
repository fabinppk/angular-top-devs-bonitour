import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  slugfyName(nome: string) {
    return nome.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  getHeroes(): void {
    this.heroService.getResources()
    .subscribe(heroes => this.heroes = heroes.devs.slice(1, 5));
  }
}
