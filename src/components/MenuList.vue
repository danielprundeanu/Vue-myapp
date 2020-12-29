<template>
    <li class="nav-li">
        <div
        v-if="item.title !== 'root'"
        :class="{bold: isFolder}"
        @click="toggle"
        >
            <router-link
                v-if="!item.nonclick"
                :to="item.path"
            >
                {{item.title}}
            </router-link>
            
            <a v-else>{{item.title}}</a>
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
            //font-weight: 700;
        }
        .closed {
            display: none;
        }

        a {
            text-decoration: none;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #5956FF;
            }
        }
    }

    #nav {
        & > .nav-li > ul > .nav-li {
            margin-bottom: 12px;

            /* First Level */
            & > div > a {
                font-weight: bold;
                font-size: 16px;
                line-height: 20px;
                padding-left: 8px;
                margin-bottom: 12px;
            }

            & > ul > .nav-li {
                /* Second Level */
                & > div > a {
                    font-size: 14px;
                    line-height: 21px;
                    padding-left: 16px;
                    margin-bottom: 4x;
                }

                & > ul > .nav-li > div > a {
                    font-size: 12px;
                    line-height: 21px;
                    padding-left: 24px;
                    margin-bottom: 4x;
                }

            }
        }
       
    }
</style>