import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dev } from '../dev';
import { DevService }  from '../dev.service';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-dev-detail',
  templateUrl: './dev-detail.component.html',
  styleUrls: ['./dev-detail.component.scss']
})
export class DevDetailComponent implements OnInit {
  dev: Dev;

  constructor(
    private route: ActivatedRoute,
    private devService: DevService,
    private location: Location,
    private meta: Meta,
    private title: Title
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const nome = this.route.snapshot.paramMap.get('nome');
    this.devService.getResourceDev(nome).subscribe(dev => {
      this.dev = dev["dev"];

      this.title.setTitle(`${this.dev.nome} - Desenvolvedor Bonitour`);
      this.meta.addTags([
        { name: 'author',   content: 'Fabiano Correia'},
        { name: 'keywords', content: 'angular seo, angular 7 universal, desenvolvedores, bonitour'},
        { name: 'description', content: `${this.dev.nome} - Desenvolvedor Bonitour com Angular 7 + SEO` }
      ]);
    });
  }

  devImage(img){
    let url_image = "https://d159gdcp8gotlc.cloudfront.net/assets/images/";
    if(img != null){
      url_image = url_image + "/usuarios_fotos/" + img;
    }else{
      url_image = url_image + "sem_imagem.jpg";
    }
    return url_image;
  }

  goBack(): void {
    this.location.back();
  }

}
