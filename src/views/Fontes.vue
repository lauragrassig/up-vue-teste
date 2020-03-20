<template>
  <div class="wrapper_fontes">
    <Banner />
    <FilterSelect v-bind:apiCards="apiSource" :FonteReturn="FonteReturn" :loading="loading"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '../components/Banner'
import FilterSelect from '@/components/FilterSelect.vue'

export default {
  components: {
    Banner,
    FilterSelect
  },
  data () {
    return {
      loadig: true,
      fonteSourceMenu: []
    }
  },
  computed: mapState(['apiSource', 'FonteReturn']),
  created () {
    this.$store.dispatch('loadApiSource')
  }
}
</script>
