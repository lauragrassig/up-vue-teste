<template>
  <div class="home">
    <Banner />
    <FilterSelect v-bind:apiCards="apiCards"/>
    <Cards v-bind:apiCards="apiCards" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '@/components/Banner.vue'
import FilterSelect from '@/components/FilterSelect.vue'
import Cards from '@/components/Cards.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    FilterSelect,
    Cards
  },
  computed: mapState(['apiCards']),
  created () {
    this.$store.dispatch('loadApiCards')
  }
}
</script>
