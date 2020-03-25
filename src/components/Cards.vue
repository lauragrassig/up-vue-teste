<template>
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
</template>

<script>
export default {
  props: [
    'apiCards'
  ],
  methods: {
    openSaibaMais (key) {
      this.$router.push({ name: 'SaibaMais', params: { typeId: key, cards: this.apiCards } })
    }
  }
}
</script>
