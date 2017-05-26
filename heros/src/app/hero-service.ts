import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroService {

    // return a promise that contains the heros list	
	getHeroes(): Promise<Hero[]> {
	  return Promise.resolve(HEROES);
	}

	//check a slow internet connection
	getHeroesSlowly(): Promise<Hero[]> {
	  return new Promise(resolve => {
	    // Simulate server latency with 2 second delay
	    setTimeout(() => resolve(this.getHeroes()), 2000);
	  });
	}
}