import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FilmService } from './../../services/index';

@Component({
	selector: 'film-list',
	templateUrl: './app/components/film/components/filmList/view/index.html',
	providers: [FilmService]
})

export class FilmList {

	@Output() gotFilm = new EventEmitter();

	public filmList;

	constructor(private _filmService: FilmService) {
		
		this.filmList = _filmService.getAllFilms();		

	}

	getFilm(ev){
		let allLists = document.getElementsByTagName("ul");
		for(let i=0; i <= allLists.length; i++){
			if(allLists[i]===event.currentTarget){ 
				this.gotFilm.next( this._filmService.findFilm(i) )
				break;
			}
		}
	}
};
