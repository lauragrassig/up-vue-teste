<template>
  <div class="wrapper_fontes">
    <Banner />
    <FilterSelect :apiCards="apiCards" :FonteReturn="FonteReturn"/>
  </div>
</template>

<script>
import axios from 'axios'

import Banner from '../components/Banner'
import FilterSelect from '@/components/pages/FilterSelect.vue'

export default {
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
          icon: 'fas fa-globe'
        },
        {
          id: 1,
          icon: 'fas fa-briefcase'
        },
        {
          id: 2,
          icon: 'fas fa-tree'
        },
        {
          id: 3,
          icon: 'fas fa-gavel'
        },
        {
          id: 4,
          icon: 'fas fa-ban'
        },
        {
          id: 5,
          icon: 'fas fa-globe-americas'
        },
        {
          id: 6,
          icon: 'fas fa-gem'
        },
        {
          id: 7,
          icon: 'fas fa-male'
        },
        {
          id: 8,
          icon: 'fas fa-piggy-bank'
        }
      ],
      FonteReturn: []
    }
  },
  created () {
    axios.get('https://demo3241810.mockable.io/sources')
      .then(response => {
        this.apiCards = response.data.sources
        this.FonteReturn = this.apiCards
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
