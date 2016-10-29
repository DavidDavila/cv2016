import { Component,OnInit } from '@angular/core';
import { Dropdown } from './../../components/dropdown/index';
declare var skrollr: any;


@Component({
	templateUrl: './app/views/home/view/index.html',
	styleUrls: ['./app/views/home/view/css/index.css']
})
export class Home  implements OnInit {
	public title:string;
	public subTitle:string;

	constructor() {
		this.title='Welcome,';
		this.subTitle='What are you interested in?';

	}
	ngOnInit() {
		  var s = skrollr.init();
	}
	download(){
		this.title = "Great! ";
		this.subTitle = "Anything else?";
	}
	ngOnDestroy() {
		 skrollr.init().destroy();
	}

}