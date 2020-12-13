<template>

    <li class="nav-li">

        <div
        v-if="item.title !== 'root'"
        :class="{bold: isFolder}"
        @click="toggle"
        >
            <router-link
                :to="item.path"
            >
                {{item.title}}
            </router-link>
        </div>

        <ul :class="{'closed' : item.children && isOpen && !item.collapsed}">
            <MenuList
                class="item"
                v-for="(child,index) in item.children"
                :key="index"
                :item="child"
            />
        </ul>
        
    </li>

    
    
</template>

<script>
export default {
    name: "MenuList",
    props: {
        item: Object
    },
    data: function() {
        return {
            isOpen: true
        };
    },
    computed: {
        isFolder: function() {
            return this.item.children && this.item.children.length;
          }
    },
    methods: {
          toggle: function() {
            if (this.isFolder) {
              this.isOpen = !this.isOpen;
            }
          }
        }
    

    


}
</script>

<style scoped lang="scss">

    .nav-li {
        text-align: left;
        font-size: 18px;
        list-style: none;
        
        .bold {
            font-weight: 700;
        }
        .closed {
            display: none;
        }

        a {
            font-weight: bold;
            text-decoration: none;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }

}

</style>