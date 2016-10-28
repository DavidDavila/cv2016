import { Home } from './views/home/index';
import { OneFilm } from './views/oneFilm/index';
import { OtherProjects } from './views/otherProjects/index';


export const Routes: any = [
	{ path: '', component: Home },
	{ path: ':title', component: OneFilm },
	{ path: 'other-projects', component: OtherProjects },
] 
