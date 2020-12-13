<template>
  <nav :style="{ background: background  || '#333'}">
    <figure class="ceva" @click="toggleNav">
      <img :src="imagePath" alt="">
    </figure>

    <ul :style="{ background: background  || '#333' }" ref="nav">
      <li
        v-for="(link,index) in navLinks"
        :key="index"
        @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999'"
        @mouseleave="$event.currentTarget.style.background = background || '#333'"
      >
        <router-link :to="link.path"
          :style="{ color: linkColor || '#DDD' }">
            {{link.text}}
            <i :class="link.icon"/>
        </router-link>

        <ul>
          <li
          v-for="(link, index) in navLinks.children"
          :key="index"
          >
            {{link.text}}
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props : ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
  methods: {
    toggleNav () {
      const nav = this.$refs.nav.classList
      nav.contains('active') ? nav.remove('active') : nav.add('active')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
nav {
  height: 60px;
  width: 100%;
  background-color: #fafafa;

  figure {
    width: 40px;
    height: 40px;
    z-index: 1;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
  }

  ul {
    margin: 0;
    list-style: none;

  }
}
</style>
