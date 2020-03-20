<template>
  <div>
    <Banner />
    <div class="saiba_mais">
      <a href="#" class="back_button" @click="$router.go(-1)">
        <span><i class="fas fa-arrow-circle-left"></i></span>
      </a>
      <h3>{{saibaMaisCard.name}}</h3>
      <p class="saiba_description">{{saibaMaisCard.description}}</p>
      <div class="saiba_price">
        <div class="price_price" v-if="saibaMaisCard.price != null">
          <span>R$</span>
        <span>{{saibaMaisCard.price}}</span>
        </div>
        <div class="price_button">
          <button class="button_default">Habilitar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '../components/Banner'
export default {
  components: {
    Banner
  },
  props: [
    'passKey'
  ],
  data: function () {
    return {
      saibaMaisCard: '',
      PageKey: ''
    }
  },
  created: function () {
    this.PageKey = this.$route.params.typeId

    this.saibaMaisCard = this.$route.params.cards[this.PageKey]
  }
}
</script>
