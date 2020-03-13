<template>
  <div class="filter_select">
    <b-container>
      <div class="select">
        <span>Ordenar</span>
        <select name="select_aplicativos" v-model="attbValue" @change="filterSelecteds()">
          <option value="todos" selected>Todos</option>
          <option value="lancamento">Lançamento</option>
          <option value="preco">Menor Preço</option>
        </select>
      </div>
      <div v-show="$route.path=='/fontes'">
        <div class="fontes">
          <div class="list_fontes">
            <label v-for="(fonte, key) in apiFonte" :key="key" :data-eventtype="fonte.type" :data-typeProduct="fonte.typeModel" :for="fonte.key" class="fonte" @change="filterOptions($event)">
              <input type="radio" :id="fonte.key" v-model="picked" :value="fonte.typeModel" name="optionsCheck">
              <i :class="fonte.icon"></i>
              <span>{{fonte.name}}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="wrapper_cards" v-show="$route.path=='/'">
        <div v-for="(card, key) in apiCards" :key="key" class="card" :data-eventtype="card.type">
          <div class="card_icon">
            <i :class="card.icon"></i>
          </div>
          <div class="card_title">
            <h3>{{card.name}}</h3>
          </div>
          <div class="card_description">
            <p>{{card.description}}</p>
            <h5>Lançamento: {{card.date}}</h5>
          </div>
          <div class="card_more">
            <div class="more_price">R$ {{card.price}}</div>
            <div class="more_button">
              <button class="button_default --no-bg" @click="openSaibaMais(key)">Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper_cards" v-show="$route.path=='/fontes'">
        <div v-for="(fonte, key) in apiFonte" :key="key" class="card" :data-eventtype="fonte.type" :data-typeProduct="fonte.typeModel">
          <div class="card_icon">
            <i :class="fonte.icon"></i>
          </div>
          <div class="card_title">
            <h3>{{fonte.name}}</h3>
          </div>
          <div class="card_description">
            <p>{{fonte.description}}</p>
          </div>
          <div class="card_more">
            <div class="more_price">R$ {{fonte.price}}</div>
            <div class="more_button">
              <button class="button_default --no-bg" @click="openSaibaMaisFonte(key)">Saiba Mais</button>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      apiCards: [],
      apiFonte: [],
      apiIcons: []
    }
  },
  created () {
    if (this.$router.currentRoute.name === 'Home') {
      axios.get('https://demo3241810.mockable.io/apps')
        .then(response => {
          this.apiCards = response.data.apps
        })
    } else {
      axios.get('https://demo3241810.mockable.io/sources')
        .then(response => {
          this.apiFonte = response.data.sources
        })
    }
  },
  attbValue: 'todos',
  picked: 'todos',
  methods: {
    filterSelecteds: function () {
      const selected = this.attbValue
      const cardList = document.querySelectorAll('.card')

      this.showTodos(cardList)

      if (selected === 'lancamento') {
        this.showLancamento()
      } else if (selected === 'preco') {
        this.showBestPrice()
      } else if (selected === 'todos') {
        this.showSelectAll()
      }
    },
    showLancamento () {
      this.apiCards.sort((a, b) => (a.date > b.date) ? 1 : -1)
      this.apiFonte.sort((a, b) => (a.date > b.date) ? 1 : -1)

      return this.apiCards
    },
    showBestPrice () {
      this.apiCards.sort((a, b) => (a.price > b.price) ? 1 : -1)
      this.apiFonte.sort((a, b) => (a.price > b.price) ? 1 : -1)

      return this.apiCards
    },
    showSelectAll () {
      this.apiCards.sort(function () { return 0.5 - Math.random() })
      this.apiFonte.sort(function () { return 0.5 - Math.random() })

      return this.apiCards
    },
    openSaibaMais (key) {
      localStorage.setItem('currentFont', JSON.stringify(this.apiCards[key]))

      this.$router.push({ name: 'SaibaMais', params: { typeId: key } })
    },
    openSaibaMaisFonte (key) {
      localStorage.setItem('currentFont', JSON.stringify(this.apiFonte[key]))

      this.$router.push({ name: 'SaibaMais', params: { typeId: key } })
    },
    filterOptions (event, value) {
      const select = event.target.value
      const selectValue = document.getElementsByName('select_aplicativos')[0].value

      if (selectValue !== '') {
        this.cleanOptionsSelected();

        [...document.querySelectorAll(`[data-typeproduct="${select}"][data-eventtype="${selectValue}"]`)].map(el => {
          el.classList.contains('-inactive') && el.classList.remove('-inactive')
        })
      } else {
        this.cleanOptionsSelected();

        [...document.querySelectorAll(`[data-typeproduct="${select}"]`)].map(el => {
          el.classList.contains('-inactive') && el.classList.remove('-inactive')
        })
      }
    },
    cleanOptionsSelected () {
      [...document.querySelectorAll('.card')].map(el => {
        !el.classList.contains('-inactive') && el.classList.add('-inactive')
      })
    },
    showTodos (cardList) {
      cardList.forEach(card => {
        card.classList.contains('-inactive') &&
        card.classList.remove('-inactive')
      })
    }
  }
}
</script>
