<template>
  <div class="wrapper_fontes">
    <Banner />
    <FilterSelect v-bind:apiCards="apiSource" :FonteMenu="FonteMenu" @valueSourceFilter="sourceFilterChange"/>
    <Cards :FonteMenu="FonteMenu" v-bind:apiCards="apiSource" ref="source"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '../components/Banner'
import FilterSelect from '@/components/FilterSelect.vue'
import Cards from '@/components/Cards.vue'

export default {
  components: {
    Banner,
    FilterSelect,
    Cards
  },
  computed: mapState(['apiSource', 'FonteMenu']),
  created () {
    this.$store.dispatch('loadApiSource')
  },
  methods: {
    sourceFilterChange (event) {
      this.$refs.source.dataChange = event
    }
  }
}
</script>
