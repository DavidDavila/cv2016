import { Component, Output, EventEmitter } from '@angular/core';
import { Router }   from '@angular/router';


@Component({
	selector: 'work-flow',
	templateUrl: './app/components/workflow/view/index.html',
	styleUrls: ['./app/components/workflow/view/css/index.css']
})
export class Workflow { 
	@Output() userUpdated = new EventEmitter();
	private router:Router;
	public works;
	public index:number;
	
	constructor(private _router: Router) {
		this.router = _router;
		this.index = -1;
		this.works = [
			{
				title:'Desarrollador FullStack',
				company:'Mades Comunicación',				
				shortName: 'Mades',
				initDate:'Apr 2008',
				finalDate:'Aug 2008',
				description:'Desarrollo y mantenimiento de servicios web para clientes de la empresa. Desarrollo de aplicaciones internas de gestión de procesos, elaboración y mantenimiento de bases de datos',
				tecnologies:[ 'Javascript','Jquery','Html','Css','Php','MySql'],
			},
			{
				title:'Desarrollador FullStack',
				company:'FIBGAR',
				shortName: 'FIBGAR',
				initDate:'Nov 2012',
				finalDate:'Aug 2014',
				description:' Análisis, desarrollo y mantenimiento de proyectos web, participando en todas las etapas del ciclo de desarrollo de software en estrecha colaboración con el equipo de diseñadores, y periodistas. Tecnología WAMP, maquetación de páginas, resolución de errores encontrados, desarrollo de nuevos módulos,desarrollo de aplicaciones internas de procesos de gestión, conexión con APIs Facebook y Twitter, pruebas y validación, App Híbridas.',
				tecnologies:['JavaScript',' MVC IRIS',' Jquery',' Rest',' PhoneGap','HTML5',' CSS3',' Bootstrap',' Php',' MySql',' Sql Lite']
			},
			{
				title:'Desarrollador Front-End/Maquetador',
				company:'Adesis NetLife',
				shortName: 'Adesis',
				initDate:'Oct 2014',
				finalDate:'May 2015',
				description:' Maquetación e implementación de aplicaciones Web empleando las últimas técnicas y buenas prácticas de desarrollo, produciendo código limpio, reutilizable, modular y adaptable (responsive), así como SEO friendly',
				tecnologies:[ 'JavaScript','MVC Angular','Jquery','Rest','PhoneGap','TML5','SASS','CSS3','Bootstrap','Php','MySql','SVN'],
			},
			{
				title:'Desarrollador Senior FullStack',
				company:'LAB RTVE - Evoluciona',
				shortName: 'RTVE',
				initDate:'May 2015',
				finalDate:'Mayo 2016',
				description:'Desarrollando Web semántica en el Laboratorio de Innovación Audiovisual de RTVE, aplicando las últimas técnicas y tecnologías del ámbito. Buenas prácticas de análisis, diseño e implementación de aplicaciones, centrándome en cumplir objetivos produciendo código limpio, modular y reutilizable, al mismo tiempo siendo capaz de comunicarme y de identificar las necesidades del cliente y las oportunidades de negocio',
				tecnologies:['ReactJs','EcmaScript6','Webpack','Babel','JavaScript','MVC Angular','odeJs','Jquery','PhoneGap','TML5','SASS','CSS3','Bootstrap','Php','Slim','Twig','MySql','Mongo','GIT'],
			},
			{
				title:'Lead Developer',
				company:'Hermanos Clever',
				shortName: 'H. Clever',
				initDate:'May 2016',
				finalDate:'Dec 2016',
				description:'Dirigí el departamento Infomático de Hermanos Clever teniendo a mi cargo hasta a cinco desarrolladores. Analista funcional, poniendo en práctica todo lo aprendido anteriormente y mimando el código, rendimiento y funcionalidad',
				tecnologies:['Scrum', 'Redux', 'React Native', 'ReactJs', 'EcmaScript6', 'Webpack Server', 'JavaScript', 'NodeJs', 'Jquery', 'PhoneGap','HTML5', 'SASS', 'CSS3', 'Wordpress', 'MySql','Mongo', 'GIT'],
			},
			{
				title:'',
				company:'Paradigma',
				shortName: 'Paradigma',
				initDate:'Dec 2016',
				finalDate:'',
				description:'',
				tecnologies:['',''],
			},

		]
		
	}
	close(){
		this.userUpdated.emit() || this.router.navigateByUrl('/interview');

	}
	ngOnInit(){
	
	}
	ngOnDestroy() {
	}
	getElement(index){
		let proyects =(<HTMLScriptElement[]><any>document.getElementsByClassName('proyect'));
		return proyects[index];
	}
	over(index){
	
		this.getElement(index).className = 'proyect hover';
	}
	blur(index){
		this.getElement(index).className = 'proyect';
	}

}