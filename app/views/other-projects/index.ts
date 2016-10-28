import { Component } from '@angular/core';

@Component({
	templateUrl: './app/views/other-projects/view/index.html',
	styleUrls: ['./app/views/other-projects/view/css/index.css']
})
export class OtherProjects {
	public menuList:Array<any>;
	constructor() {
		this.menuList = [
			{ name:'Boilerplate React Redux', link: 'https://github.com/DavidDavila/boilerplate-redux' },
			{ name:'BoilerPlate React Redux Async with ReactToolBox', link: 'https://github.com/DavidDavila/BoilerPlate-Redux-Async-ReactToolBox' },
			{ name:'Angular2 HelloWorld', link: 'https://github.com/DavidDavila/Angular2-HelloWorld' }
		]
	}

}