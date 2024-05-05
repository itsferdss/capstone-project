<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import Sidebar from './components/Sidebar/Sidebar.vue';
import { sidebarWidth } from './components/Sidebar/state';

export default {
  components: {
    Sidebar,
  },
  setup() {
    const route = useRoute();

    // Compute whether to show the sidebar based on the current route path
    const showSidebar = computed(() => {
      // Here, you can define conditions based on route path to decide whether to show the sidebar
      // For example, you can check if the route path is not '/'
      return !['/', '/register'].includes(route.path);
    });

    return {
      showSidebar,
      sidebarWidth,
    };
  },
};
</script>

<template>
  <div id="app">
    <Sidebar v-if="showSidebar" />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
