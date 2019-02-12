import { Component, OnInit } from '@angular/core';
import { Dev } from '../dev';
import { DevService } from '../dev.service';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  devs: Dev[] = [];

  constructor(
    private devService: DevService,
    meta: Meta,
    title: Title
  ) {
    title.setTitle('Dashboard - Desenvolvedores Bonitour');

    meta.addTags([
      { name: 'author',   content: 'Fabiano Correia'},
      { name: 'keywords', content: 'angular seo, angular 7 universal, desenvolvedores, bonitour'},
      { name: 'description', content: 'Projeto Desenvolvedores Bonitour com Angular 7 + SEO' }
    ]);
  }

  ngOnInit() {
    this.getHeroes();
  }

  slugfyName(nome: string) {
    return nome.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  getHeroes(): void {
    this.devService.getResources()
    .subscribe((devs) => {
      this.devs = devs["devs"].slice(2, 6)
    });
  }
}
