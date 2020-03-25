<template>
  <div class="filter_select">
    <b-container>
      <div class="select" v-show="$route.path=='/'">
        <span>Ordenar</span>
        <select name="select_aplicativos" @change="filterSelecteds($event.target.value)">
          <option value="todos" selected>Todos</option>
          <option value="lancamento">Lançamento</option>
          <option value="preco">Menor Preço</option>
        </select>
      </div>
      <div v-show="$route.path=='/fontes'">
        <div class="fontes">
          <div class="list_fontes">
            <label v-for="(fonte, key) in FonteMenu" :key="key" :value="fonte.name" :for="fonte.key" class="fonte" @change="filterOptions($event, fonte.name)">
              <input type="radio" :id="fonte.key" v-model="picked" :value="fonte.name" name="optionsCheck">
              <i :class="fonte.icon"></i>
              <span>{{fonte.name}}</span>
            </label>
          </div>
        </div>
      </div>
      <Cards v-bind:apiCards="apiCards"/>
    </b-container>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'

export default {
  components: {
    Cards
  },
  props: [
    'apiCards',
    'FonteMenu'
  ],
  attbValue: 'todos',
  picked: 'todos',
  methods: {
    filterSelecteds: function (value) {
      if (value === 'lancamento') { return this.showLancamento() }
      if (value === 'preco') { return this.showBestPrice() }

      return this.showSelectAll()
    },
    showLancamento () {
      this.apiCards.sort((a, b) => (a.date < b.date) ? 1 : -1)

      return this.apiCards
    },
    showBestPrice () {
      this.apiCards.sort((a, b) => (a.price > b.price) ? 1 : -1)

      return this.apiCards
    },
    showSelectAll () {
      this.apiCards.sort(function () { return 0.5 - Math.random() })

      return this.apiCards
    },
    filterOptions (event, value) {
      this.apiCards = this.FonteMenu
      this.apiSource = this.FonteMenu

      this.apiCards = this.apiCards.filter(el => {
        if (value === el.name) {
          return el
        }
      })
    }
  }
}
</script>
