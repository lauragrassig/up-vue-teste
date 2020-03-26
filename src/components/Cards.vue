<template>
<b-container>
  <div class="wrapper_cards">
    <div :value="dataChange" v-for="(card, key) in apiCards" :key="key" class="card">
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
</template>

<script>
export default {
  props: [
    'apiCards',
    'FonteMenu'
  ],
  data () {
    return {
      dataChange: 'no change'
    }
  },
  watch: {
    dataChange: function (event) {
      this.apiCards = this.FonteMenu
      this.apiSource = this.FonteMenu
      this.apiCards = this.apiCards.filter(el => {
        if (event === el.name) {
          return el
        }
      })
    }
  },
  methods: {
    openSaibaMais (key) {
      this.$router.push({ name: 'SaibaMais', params: { typeId: key, cards: this.apiCards } })
    }
  }
}
</script>
