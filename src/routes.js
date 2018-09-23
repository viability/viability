import Start from './components/Start'
import Projects from './components/projects/Projects'
import ProjectContent from './components/projects/ProjectContent'
import Analysis from './components/analysis/Analysis'

export const routes = [
  { path: '', component: Start },
  { path: '/projects', component: Projects },
  { path: '/projects/new', component: ProjectContent },
  { path: '/analysis', component: Analysis }
];