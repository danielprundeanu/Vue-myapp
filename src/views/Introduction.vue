<template>
  <div class="introduction">
    <PrimaComponenta msg="1.1.Prima componenta"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PrimaComponenta from '@/components/PrimaComponenta.vue'

export default {
  name: 'Introduction',
  components: {
    PrimaComponenta,

  }
}
</script>
