import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './app/views/oneFilm/view/index.html',
	styleUrls: ['./app/views/oneFilm/view/css/index.css']
})
export class OneFilm implements OnInit{
	
	public paramsSub: any;
	public titleFilm: string;
	constructor(private _activatedRoute: ActivatedRoute) {
		
	}
	ngOnInit() {
		this.paramsSub = this._activatedRoute.params.subscribe(params => this.titleFilm = params['title']);
	}
	ngOnDestroy() {
		this.paramsSub.unsubscribe();
	}
}