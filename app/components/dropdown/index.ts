import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'dropdown',
	templateUrl: './app/components/dropdown/view/index.html',
	styleUrls: ['./app/components/dropdown/view/css/index.css']
})
export class Dropdown {
	public author: string;
	public job: string;
	public paramsSub: any;

	constructor(private _activatedRoute: ActivatedRoute) {
		this.job ='Creative FullStack Developer';
	}
	ngOnInit() {
		this.paramsSub = this._activatedRoute.params.subscribe(params => { 
			this.author = params['company']?'Hello '+ params['company']:this.author ='David Dávila Pino';
			this.job = params['company']?'If you are looking for a Creative FullStack Developer ...':'Creative FullStack Developer';
		});
	}
	ngOnDestroy() {
		this.paramsSub.unsubscribe();
	}

}