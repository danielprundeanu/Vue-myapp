
<template>
    <div>
        <div 
            @click="expanded = !expanded;"
            :style="{'margin-left': depth * 16 + 'px'}"
            class="node"
        >
            <p>{{node.name}}</p>
        </div>

        <div
            v-if="expanded"
        >
            <TreeBrowser
                v-for="child in node.children"
                :key="child.name"
                :node="child"
                :depth="depth + 1"
                v-bind:class="{ active: child.expand}"
            />
        </div>
        
    </div>
</template>

<script>
export default {
    name: "TreeBrowser",
    props: {
        node: Object,
        depth: {
            type : Number,
            default: 0
        }
    },
    data() {
        return {
            expanded: true,
        }
    }
}
</script>

<style scoped>
    .node {
        text-align: left;
        font-size: 18px;
    }
</style>