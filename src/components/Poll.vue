<template>
  <div class="">
    <p> {{ title }}</p>

    <template v-if="vote"> You voted for {{ vote }}</template>
    
    <ul v-else>
        <li v-for="option in _options" :key="option">
          <button @click="vote = option">
            Vote for {{ option }}
          </button>
        </li>
    </ul>
  </div>
</template>

<script>

  function getTextFromVnode(vnode) {
    if(!vnode.children) return vnode.text || ''

    return (
      (vnode.text || '') + 
      vnode.children.reduce((text, vnode) => (text || '') + vnode.text || '','')
    )
  }

  export default {
    name: 'Poll',
    props: {
      options: { type: Array, default: () => [] }
    },
    data: () => ({
      vote: '',
    }),
    computed: {
      title() {
        
        if(!this.$slots.default) return ''
        const header = this.$slots.default.find(
            vnode => vnode && vnode.tag && /h\d/i.test(vnode.tag)
        )

        if(!header) return ''

        return getTextFromVnode(header)
      },
      _options() {
        if (this.options && this.options.length) return this.options

        if(!this.$slots.default) return []
        const ul = this.$slots.default.find(
            vnode => vnode && vnode.tag && vnode.tag.toLowerCase() === 'ul'
        )

        if(!ul || !ul.children) return []

        return ul.children.reduce((options, vnode) => {
          const text = getTextFromVnode(vnode).trim()

          if(text) options.push(text)
          return options
        }, [])
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
