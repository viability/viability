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

export const tree = {
  name: '<nuevo proyecto>',
  children: [
    {
      name: 'Datos y parámetros',
      component: 'ProjectViewData',
      key: '1'
    },
    {
      name: 'Formulación y preparación',
      children: [
        {
          name: 'Estudio de mercado',
          children: [

          ],
          component: 'ProjectMarketStudy',
          key: '21'
        },
        {
          name: 'Estudio técnico',
          children: [

          ],
          key: '22'
        },
        {
          name: 'Estudio organizacional',
          children: [

          ],
          key: '23'
        }
      ],
      plus: false,
      key: '2'
    },
    {
      name: 'Evaluación',
      children: [
        {
          name: 'Estudio financiero',
          children: [
            {
              name: 'Ingresos',
              children: [
                { name: '<nuevo>' }
              ],
              plus: true,
              key: '311'
            },
            {
              name: 'Costos de Operación',
              children: [
                {
                  name: 'Producción',
                  children: [
                    { name: '<nuevo>' }
                  ],
                  plus: true,
                  key: '3121'
                },
                {
                  name: 'Administración',
                  children: [
                    { name: '<nuevo>' }
                  ],
                  plus: true,
                  key: '3122'
                },
                {
                  name: 'Ventas',
                  children: [
                    { name: '<nuevo>' }
                  ],
                  plus: true,
                  key: '3123'
                },
                {
                  name: 'Financieros',
                  children: [
                    { name: '<nuevo>' }
                  ],
                  plus: true,
                  key: '3124'
                }
              ],
              plus: false,
              key: '312'
            },
            {
              name: 'Inversiones',
              children: [
                {
                  name: 'Items de inversión',
                  children: [
                    { name: '<nuevo>' }
                  ],
                  plus: true,
                  key: '3131'
                },
                {
                  name: 'Activos fijos',
                  key: '3132'
                },
                {
                  name: 'Activos diferidos',
                  key: '3133'
                },
                {
                  name: 'Capital de trabajo',
                  key: '3134'
                }
              ],
              plus: false,
              key: '313'
            },
            {
              name: 'Depreciación de AF',
              key: '314'
            },
            {
              name: 'Amortización de AD',
              key: '315'
            },
            {
              name: 'Financiamiento externo',
              key: '316'
            }
          ],
          plus: false,
          key: '31'
        }
      ],
      plus: false,
      key: '3'
    }
  ],
  plus: false,
  component: 'ProjectView'
};