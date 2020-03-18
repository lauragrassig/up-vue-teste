<template>
  <div class="home">
    <Banner/>
    <FilterSelect v-bind:apiCards="apiCards"/>
  </div>
</template>

<script>
import axios from 'axios'

import Banner from '@/components/Banner.vue'
import FilterSelect from '@/components/pages/FilterSelect.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    FilterSelect
  },
  data () {
    return {
      apiCards: [],
      apiIcons: [
        {
          id: 0,
          icon: 'far fa-money-bill-alt'
        },
        {
          id: 1,
          icon: 'fas fa-coins'
        },
        {
          id: 2,
          icon: 'fas fa-share-alt'
        },
        {
          id: 3,
          icon: 'far fa-check-square'
        },
        {
          id: 4,
          icon: 'fas fa-car'
        },
        {
          id: 5,
          icon: 'fas fa-network-wired'
        },
        {
          id: 6,
          icon: 'fas fa-search'
        },
        {
          id: 7,
          icon: 'far fa-file'
        },
        {
          id: 8,
          icon: 'fas fa-address-card'
        },
        {
          id: 9,
          icon: 'fas fa-user-secret'
        },
        {
          id: 10,
          icon: 'fas fa-map-marker-alt'
        },
        {
          id: 11,
          icon: 'fas fa-bullseye'
        }
      ]
    }
  },
  created () {
    axios.get('https://demo3241810.mockable.io/apps')
      .then(response => {
        this.apiCards = response.data.apps
        this.addIcon()
      })
  },
  methods: {
    addIcon (element) {
      this.apiCards.map((card, i) => {
        if (card.id === this.apiIcons[i].id) {
          card.icon = this.apiIcons[i].icon
        }
      })
    }
  }
}
</script>
