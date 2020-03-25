<template>
  <div class="home">
    <Banner />
    <FilterSelect v-bind:apiCards="apiCards"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '@/components/Banner.vue'
import FilterSelect from '@/components/FilterSelect.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    FilterSelect
  },
  computed: mapState(['apiCards']),
  created () {
    this.$store.dispatch('loadApiCards')
  }
}
</script>
