import { Component,OnInit, Pipe, PipeTransform } from '@angular/core';
import { Dropdown } from './../../components/dropdown/index';
import { Router }   from '@angular/router';
declare var skrollr: any;


@Component({
	templateUrl: './app/views/home/view/index.html',
	styleUrls: ['./app/views/home/view/css/index.css']
})
export class Home  implements OnInit {
	public title:string;
	public subTitle:string;
	public parentRouter: Router;

	constructor(private _router: Router ) {
		this.title='Welcome,';
		this.subTitle='What are you interested in?';
		this.parentRouter = _router;

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
	goTo(){
		event.stopPropagation();

		this.title = "Perfect";
		this.subTitle = "let´s go!";
		var home = document.getElementById('home');
		home.className = 'out';

		setTimeout((()=>{

			var scrollStep = -window.scrollY / (1000 / 15),
	        scrollInterval = setInterval((()=>{
		        if ( window.scrollY != 0 ) {
		            window.scrollBy( 0, scrollStep );
		        }
		        else {		            
		        	clearInterval(scrollInterval); 
		        	setTimeout((()=>this.parentRouter.navigateByUrl('/interview')).bind(this),300);
		        }
		    }).bind(this),7);

		}).bind(this),800);
	}
}