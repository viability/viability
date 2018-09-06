import Start from './components/Start'
import Projects from './components/projects/Projects'
import ProjectNew from './components/projects/ProjectNew'
import Analysis from './components/analysis/Analysis'

export const routes = [
  { path: '', component: Start },
  { path: '/projects', component: Projects },
  { path: '/projects/new', component: ProjectNew },
  { path: '/analysis', component: Analysis }
];