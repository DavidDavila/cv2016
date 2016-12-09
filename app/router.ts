import { Home } from './views/home/index';
import { Interview } from './views/interview/index';
import { Workflow } from './components/workflow/index';
import { Education } from './components/education/index';

export const Routes: any = [
	{ path: '', component: Home },
	{ path: 'interview', component: Interview },
	{ path: 'interview/workflow', component: Workflow },
	{ path: 'interview/studies', component: Education },
	{ path: ':company', component: Home },
] 
