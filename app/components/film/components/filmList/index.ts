import { Component } from '@angular/core';
import { FilmService } from './../../services/index';
FilmService
@Component({
	selector: 'film-list',
	templateUrl: './app/components/film/components/filmList/view/index.html',
	providers: [FilmService]
})

export class FilmList {

	public filmList;

	constructor(private _filmService: FilmService) {
	
		this.filmList = _filmService.getAllFilms();
	}
};
