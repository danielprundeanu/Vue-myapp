<template>
  <div id="app">

    <!-- Sidebar -->
    <aside id="sidebar">
        <ul id="nav">
          <MenuList class="item" :item="menu" />
        </ul>
    </aside>

    <!-- Main -->
    <section id="main">
        <article class="article">
            <router-view class="content" />
            <div class="inner-sidebar">Aici Sidebar</div>
        </article>
    </section>


    <!-- <div id="main">
      {{ title }}
      <component :is="page" />
    </div> -->

  </div>
</template>

<script>
import './assets/css/main.css'
import MenuList from "@/components/MenuList.vue";
import menuJson from "@/components/MenuList.json";
//import Poll from "@/components/Poll.vue";
//import Introduction from './pages/Introduction.vue'
//import './assets/css/main.css'

export default {
  name: 'App',
  components: {
    MenuList
    
    // Introduction: {
    //   extends: Introduction.vue.component,
    // },
  },
  data() {
    return {
      menu: menuJson,
      //page: null,
      //title: null
    };
  },
  
  created() {
    /* const pathname = window.location.pathname.slice(1);
    this.page = () =>
      import(`./pages/${pathname}.md`).then(({ attributes, vue }) => {
        this.title = attributes.title
        return { extends:vue.component, components: { Poll } }
        }); */
  }
};
</script>


<style>

body, html {
  height: 100%;
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  display: block;
  width: 100vw;
  height: 100%;
}

#sidebar {
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
  bottom: 0;
  background-color: #fafafa;
  padding: 8px 0 8px 8px;
  overflow: hidden;
}


.article {
  height: 100%;
  background: #FFFFFF;
  box-shadow: 0 6px 8px 0 rgba(0,0,0,0.05);
  border-radius: 24px;
  text-align: left;
  padding: 32px 256px 0 0;
  overflow-y: auto;
}

.content {
  width: 75%;
  margin: 0 auto;
}
.inner-sidebar {
  width: 256px;
  background: pink;
  position: fixed;
  top: 8px;
  right: 8px;
}

h1 {
  font-size: 32px;
  font-weight: 600;
}
</style>
