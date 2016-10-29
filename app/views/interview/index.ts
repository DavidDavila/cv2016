import { Component,OnInit } from '@angular/core';
import { Projects } from './../../components/projects/index';


@Component({
	templateUrl: './app/views/interview/view/index.html',
	styleUrls: ['./app/views/interview/view/css/index.css']
})
export class Interview  implements OnInit{

	constructor() {
		
	}
	ngOnInit() {
		let body = document.getElementsByTagName('body')[0];
		body.style.height =  null; 
	}

}