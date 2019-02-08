import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const nome = this.route.snapshot.paramMap.get('nome');
    this.heroService.getResourceHero(nome).subscribe(hero => {
      this.hero = hero.dev;
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
