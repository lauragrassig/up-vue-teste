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
            <label v-for="(fonte, key) in FonteMenu" :key="key" :value="fonte.name" :for="fonte.key" class="fonte"   >
              <input type="radio" :id="fonte.key" v-model="picked" :value="fonte.name" name="optionsCheck" @click="changeEventValueFilter($event.target.value)">
              <i :class="fonte.icon"></i>
              <span>{{fonte.name}}</span>
            </label>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  props: [
    'apiCards',
    'FonteMenu'
  ],
  attbValue: 'todos',
  picked: 'todos',
  getters: {
    getApi: (state, getters) => {
      return getters.apiCards.name
    }
  },
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
    onClickButton (event) {
      this.$emit('clicked', event)
    },
    changeEventValueFilter (event) {
      this.$emit('valueSourceFilter', event)
    }
  }
}
</script>
