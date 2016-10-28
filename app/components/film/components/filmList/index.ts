import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FilmService } from './../../services/index';
import { FilmModel as Film} from './../../model/index';

@Component({
	selector: 'film-list',
	templateUrl: './app/components/film/components/filmList/view/index.html',
	styleUrls:['./app/components/film/components/filmList/view/css/index.css'],
	providers: [FilmService]
})

export class FilmList {
	
	@Output() gotFilm = new EventEmitter();
	@Input() currentFilm: Film;

	public filmList:Array<Film>;

	constructor(private _filmService: FilmService) {
		this.filmList = _filmService.getAllFilms();
	}

	getFilm(event) {
		let allLists = document.getElementsByClassName('filmList');
		for(let i=0; i <= allLists.length; i++){
			if( allLists[i] === event.currentTarget.parentElement ) { 
				this.currentFilm = this._filmService.findFilm(i)
				this.gotFilm.next( this.currentFilm )
				break;
			}
		}
	}
};
