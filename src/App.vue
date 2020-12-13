<template>
  <div id="app">
    <ul id="nav">
      <MenuList 
        class="item"
        :item="menu"
      />
    </ul>

    <div id="main">
      <router-view/>
    </div>

    
    
  </div>
</template>


<script>
import MenuList from '@/components/MenuList.vue'
import menuJson from '@/components/MenuList.json'
//import './assets/css/main.css'

  export default {
    components: {
      MenuList
    },
    data(){
      return{
        menu: menuJson
      }
    }
  }
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
