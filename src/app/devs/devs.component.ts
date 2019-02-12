import { Component, OnInit } from '@angular/core';
import { Dev } from '../dev';
import { DevService } from '../dev.service';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-devs',
  templateUrl: './devs.component.html',
  styleUrls: ['./devs.component.scss']
})
export class DevsComponent implements OnInit {

  devs: Dev[];

  constructor(
    private devService: DevService,
    meta: Meta,
    title: Title
  ) {
    title.setTitle('Lista de Desenvolvedores - Desenvolvedores Bonitour');

    meta.addTags([
      { name: 'author',   content: 'Fabiano Correia'},
      { name: 'keywords', content: 'angular seo, angular 7 universal, desenvolvedores, bonitour'},
      { name: 'description', content: 'Lista de Desenvolvedores Bonitour com Angular 7 + SEO' }
    ]);
  }

  ngOnInit() {
    this.getResources();
  }

  slugfyName(nome: string) {
    return nome.replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  getResources() {
    this.devService.getResources().subscribe((devs) => {
      this.devs = devs["devs"];
    });
  }
}
