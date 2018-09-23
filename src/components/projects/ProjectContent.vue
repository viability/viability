<template>
  <div class="wrapper">
    <!-- Sidebar  -->
    <nav id="sidebar" class="card text-white bg-primary mb-3" :class="{ active: sidebar }">
      <div class="card-header">
        <h3>Nuevo Proyecto</h3>
      </div>
      <ProjectTreeView :clickView="clickView"/>
    </nav>

    <!-- Page Content  -->
    <div id="content">
      <nav class="card bg-light mb-3 navbar-light">
        <div class="card-header">
          <button type="button" id="sidebarCollapse" class="btn btn-primary" @click="toggleBar()">
            <i class="navbar-toggler-icon"></i>
            <span>&nbsp;</span>
            <span>{{ toggle }}</span>
          </button>
        </div>
      </nav>
      <div>
        <keep-alive>
          <component :is="isComponent"/>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
  import ProjectTreeView from './ProjectTreeView'
  import ProjectView from './ProjectView'
  import ProjectViewData from './ProjectViewData'

  export default {
    name: "ProjectContent",
    components: {
      ProjectTreeView, ProjectView, ProjectViewData
    },
    data() {
      return {
        sidebar: false,
        toggle: "Ocultar",
        isComponent: 'ProjectView'
      }
    },
    methods: {
      toggleBar() {
        this.sidebar = !this.sidebar;
        this.toggle = this.sidebar ? "Mostrar" : "Ocultar";
      },

      clickView(component) {
        this.isComponent = component;
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