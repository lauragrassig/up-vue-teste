<template>
  <div class="home">
    <Banner/>
    <FilterSelect v-bind:apiCards="apiCards" :loading="loading"/>
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
  data () {
    return {
      loadig: true
    }
  },
  computed: mapState(['apiCards']),
  created () {
    this.$store.dispatch('loadApiCards')
  },
  methods: {
    addIcon (element) {
      element.map((card, i) => {
        if (card.id === this.apiIcons[i].id) {
          card.icon = this.apiIcons[i].icon
        }
      })
    }
  }
}
</script>
