import { Home } from './views/home/index';
import { Interview } from './views/interview/index';
import { Studies } from './components/studies/index';

export const Routes: any = [
	{ path: '', component: Home },
	{ path: 'interview', component: Interview },
	{ path: 'interview/studies', component: Studies },
	{ path: ':company', component: Home },
] 
