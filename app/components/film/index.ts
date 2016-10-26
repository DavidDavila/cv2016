import { Component, Input } from '@angular/core';
import { FilmList } from './components/filmList/index';

@Component({
	selector: 'film',
	templateUrl: './app/components/film/view/index.html'
})

export class Film {
	public currentFilm;
	constructor() {
		
	}
	private getCurrentFilm(film){
		this.currentFilm = film;
	}

};



