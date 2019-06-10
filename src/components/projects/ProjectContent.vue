<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar" class="card text-white bg-primary" :class="{ active: sidebar }">
      <div class="card-header">
        <h3>Nuevo Proyecto</h3>
      </div>
      <ProjectTreeView :clickView="clickView"/>
    </nav>

    <!-- Page Content  -->
    <div id="content">
      <nav class="card bg-light navbar-light">
        <div class="card-header">
          <button type="button" id="sidebarCollapse" class="btn btn-primary" @click="toggleBar()">
            <i class="mdi mdi-format-align-left"></i>
            <span>&nbsp;</span>
            <span>{{ toggle }}</span>
          </button>
        </div>
      </nav>
      <ProjectBreadcrumb :breadcrumbs="breads" :clickComponent="clickComponent"/>
      <div id="slotView" class="card">
        <keep-alive>
          <component :is="isComponent"/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import ProjectBreadcrumb from './ProjectBreadcrumb'
  import ProjectMarketStudy from './ProjectMarketStudy'
  import ProjectTreeView from './ProjectTreeView'
  import ProjectView from './ProjectView'
  import ProjectViewData from './ProjectViewData'

  import { tree } from "../../routes";

  export default {
    name: "ProjectContent",
    components: {
      ProjectBreadcrumb, ProjectMarketStudy, ProjectTreeView, ProjectView, ProjectViewData
    },
    data() {
      return {
        sidebar: false,
        toggle: "Ocultar",
        isComponent: tree.component,
        breads: [{ name: tree.name, component: tree.component, active: false }]
      }
    },
    methods: {
      toggleBar() {
        this.sidebar = !this.sidebar;
        this.toggle = this.sidebar ? "Mostrar" : "Ocultar";
      },

      clickComponent(component) {
        this.isComponent = component;
      },
//Solo con fin de chequeo del repositorio..
      clickView(component, breadcrumb) {
        this.clickComponent(component);
        this.breads = breadcrumb;
      }

    }
  }
</script>

<style scoped>
  /* ---------------------------------------------------
      SIDEBAR STYLE
  ----------------------------------------------------- */
  .wrapper {
    display: flex;
    align-items: stretch;
    margin: -4rem -2rem;
  }

  #sidebar {
    min-width: 250px;
    max-width: 250px;
    color: #fff;
    transition: all 0.3s;
  }

  #sidebar.active {
    margin-left: -250px;
  }

  /* ---------------------------------------------------
      CONTENT STYLE
  ----------------------------------------------------- */
  #content {
    width: 100%;
    transition: all 0.3s;
    min-height: 100vh;
  }

  #slotView {
    padding: 0.8rem;
    min-height: 100vh;
  }

  /* ---------------------------------------------------
      MEDIAQUERIES
  ----------------------------------------------------- */

  @media (max-width: 768px) {
    #sidebar {
      margin-left: -250px;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #sidebarCollapse span {
      display: none;
    }
    .wrapper {
      margin: -2rem -1rem;
    }
  }
</style>