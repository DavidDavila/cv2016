import { Home } from './views/home/index';
import { Interview } from './views/interview/index';


export const Routes: any = [
	{ path: '', component: Home },
	{ path: 'interview', component: Interview },
	{ path: ':company', component: Home },
] 
