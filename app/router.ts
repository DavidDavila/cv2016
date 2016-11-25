import { Home } from './views/home/index';
import { Interview } from './views/interview/index';
import { Workflow } from './components/workflow/index';

export const Routes: any = [
	{ path: '', component: Home },
	{ path: 'interview', component: Interview },
	{ path: 'interview/workflow', component: Workflow },
	{ path: ':company', component: Home },
] 
