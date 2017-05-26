import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero-service';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>

  <h2>My Heroes</h2>
  <ul class="heroes">
	  <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
	  	<span class="badge">{{hero.id}}</span> {{hero.name}}
	  </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [HeroService] //provide tells it to add a new instance
})
export class AppComponent implements OnInit{

  title = 'Tour of Heroes'; // title
  heroes: Hero[]; //import service
  selectedHero: Hero; //selected hero style
    
  //create a new hero method
  //heroService = new HeroService(); // don't do this
  constructor(private heroService: HeroService) { }

  //life cycle hook - on page loads load the heroes method
  ngOnInit(): void {
    this.getHeroes();
  }

  // get all heros
  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();
    //because we use (.then) promises we have to do it like this..
    //you can do getHeroesSlowly() to check a slow speed
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  //selected hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}