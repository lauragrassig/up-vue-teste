<template>
  <div>
    <Banner />
    <div class="saiba_mais">
      <a href="#" class="back_button" @click="$router.go(-1)">
        <span><i class="fas fa-arrow-circle-left"></i></span>
      </a>
      <h3>{{currentFonte.title}}</h3>
      <p class="saiba_description">{{currentFonte.description}}</p>
      <div class="saiba_price">
        <div class="price_price">
          <span>R$</span>
          <span>{{currentFonte.price}}</span>
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
  data: function () {
    return {
      currentFonte: ''
    }
  },
  created: function () {
    this.currentFonte = JSON.parse(localStorage.getItem('currentFont'))

    this.currentCard = JSON.parse(localStorage.getItem('currentCard'))
  }
}
</script>
