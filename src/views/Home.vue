<template>
  <div class="home">
    <Banner/>
    <FilterSelect v-bind:apiCards="apiCards" :loading="loading"/>
            <tr v-for="(card, key) in apiCards" :key="key">
        <td>{{card.name}}</td>
      </tr>
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
  state: {
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
  },
  computed: mapState(['apiCards']),
  created () {
    this.$store.dispatch('loadApiCards')
  },
  data () {
    return {
      // apiCards: [],
      // apiIcons: [
      //   {
      //     id: 0,
      //     icon: 'far fa-money-bill-alt'
      //   },
      //   {
      //     id: 1,
      //     icon: 'fas fa-coins'
      //   },
      //   {
      //     id: 2,
      //     icon: 'fas fa-share-alt'
      //   },
      //   {
      //     id: 3,
      //     icon: 'far fa-check-square'
      //   },
      //   {
      //     id: 4,
      //     icon: 'fas fa-car'
      //   },
      //   {
      //     id: 5,
      //     icon: 'fas fa-network-wired'
      //   },
      //   {
      //     id: 6,
      //     icon: 'fas fa-search'
      //   },
      //   {
      //     id: 7,
      //     icon: 'far fa-file'
      //   },
      //   {
      //     id: 8,
      //     icon: 'fas fa-address-card'
      //   },
      //   {
      //     id: 9,
      //     icon: 'fas fa-user-secret'
      //   },
      //   {
      //     id: 10,
      //     icon: 'fas fa-map-marker-alt'
      //   },
      //   {
      //     id: 11,
      //     icon: 'fas fa-bullseye'
      //   }
      // ],
      // loading: true
    }
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
