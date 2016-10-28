import { Component } from '@angular/core';

@Component({
	selector: 'menu',
	templateUrl: './app/components/menu/view/index.html',
	styleUrls: ['./app/components/menu/view/css/index.css']
})
export class Menu {
	public menuList:Array<any>;
	constructor() {
		this.menuList = [
			{ name:'Home', link: '/' },
			{ name:'Otros Proyectos', link: '/other-projects' }
		]
	}

}