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
      <div class="loader" v-if="loading">
        <img src="https://i.ya-webdesign.com/images/loading-gif-png-5.gif"/>
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
      <div class="wrapper_cards">
        <div v-for="(card, key) in apiCards" :key="key" class="card">
          <div class="card_icon">
            <i :class="card.icon"></i>
          </div>
          <div class="card_title">
            <h3>{{card.name}}</h3>
          </div>
          <div class="card_description">
            <p>{{card.description}}</p>
            <h5>{{moment(card.date).format('L')}}</h5>
          </div>
          <div class="card_more">
            <div class="more_price" v-if="card.price != null">R$ {{card.price}}</div>
            <div class="more_button">
            <button class="button_default --no-bg" @click="openSaibaMais(key)">Saiba Mais</button>
            </div>
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
    'FonteMenu',
    'loading'
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
    openSaibaMais (key) {
      this.$router.push({ name: 'SaibaMais', params: { typeId: key, cards: this.apiCards } })
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
