<template>
  <div id="app">
    <ul id="nav">
      <MenuList class="item" :item="menu" />
    </ul>
  
    <!-- <div id="main">
      <router-view />
    </div> -->

    <div>
      {{ title }}
      <component :is="page" />
    </div>

  </div>
</template>

<script>
import MenuList from "@/components/MenuList.vue";
import menuJson from "@/components/MenuList.json";
//import Introduction from './pages/Introduction.vue'
//import Introduction from "./pages/Introduction.md";
//import './assets/css/main.css'

export default {
  components: {
    MenuList,
    Poll
    // Introduction: {
    //   extends: Introduction.vue.component,
    // },
  },
  data() {
    return {
      menu: menuJson,
      page: null,
      title: null,
    };
  },
  created() {
    const pathname = window.location.pathname.slice(1);
    this.page = () =>
      import(`./pages/${pathname}.md`).then(({ attributes, vue }) => {
        this.title = attributes.title
        return vue.component
        });
  },
};
</script>


<style>
body {
  margin: 0;
  padding: 0;
}

#nav {
  position: fixed;
  width: 300px;
  height: 100%;
  background-color: #fafafa;
  top: 0;
  left: 0;
  margin: 0;
  padding: 24px;
}

#main {
  position: absolute;
  left: 300px;
  top: 0;
  right: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
