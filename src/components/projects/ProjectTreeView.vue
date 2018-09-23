<template>
  <ul>
    <TreeView class="item" :model="treeData" :isView="isView"/>
  </ul>
</template>

<script>
  import TreeView from './TreeView'

  export default {
    name: "ProjectTreeView",
    props: ['clickView'],
    data() {
      return {
        treeData: {
          name: '<nuevo proyecto>',
          children: [
            {
              name: 'Datos y parámetros',
              component: 'ProjectViewData'
            },
            {
              name: 'Formulación y preparación',
              children: [
                {
                  name: 'Estudio de mercado',
                  children: [

                  ]
                },
                {
                  name: 'Estudio técnico',
                  children: [

                  ]
                },
                {
                  name: 'Estudio organizacional',
                  children: [

                  ]
                }
              ],
              plus: false
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
                      plus: true
                    },
                    {
                      name: 'Costos de Operación',
                      children: [
                        {
                          name: 'Producción',
                          children: [
                            { name: '<nuevo>' }
                          ],
                          plus: true
                        },
                        {
                          name: 'Administración',
                          children: [
                            { name: '<nuevo>' }
                          ],
                          plus: true
                        },
                        {
                          name: 'Ventas',
                          children: [
                            { name: '<nuevo>' }
                          ],
                          plus: true
                        },
                        {
                          name: 'Financieros',
                          children: [
                            { name: '<nuevo>' }
                          ],
                          plus: true
                        }
                      ],
                      plus: false
                    },
                    {
                      name: 'Inversiones',
                      children: [
                        {
                          name: 'Items de inversión',
                          children: [
                            { name: '<nuevo>' }
                          ],
                          plus: true
                        },
                        { name: 'Activos fijos' },
                        { name: 'Activos diferidos' },
                        { name: 'Capital de trabajo' }
                      ],
                      plus: false
                    },
                    { name: 'Depreciación de AF' },
                    { name: 'Amortización de AD' },
                    { name: 'Financiamiento externo' }
                  ],
                  plus: false
                }
              ],
              plus: false
            }
          ],
          plus: false,
          component: 'ProjectView'
        }
      }
    },
    methods: {
      isView(component) {
        this.clickView(component);
      }
    },
    components: {
      TreeView
    }
  }
</script>

<style scoped>
  .item {
    cursor: pointer;
  }

  ul {
    padding-left: 1em;
    line-height: 2em;
  }
</style>