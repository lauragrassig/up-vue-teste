<template>
  <div class="wrapper_banner">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#05015a"
      img-width="1024"
      img-height="389"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="https://placeimg.com/1000/380/any/grayscale">
        <div class="banner">
          <div class="banner_title">
            <div class="logo--banner">
              <div class="logo_gota"></div>
              <div class="logo_name"><h1>flooop</h1></div>
            </div>
            <div class="title_title">
              <h2 class="title_banner">Histórico Empresarial</h2>
            </div>
          </div>
          <div class="banner_description">
            <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação</p>
          </div>
          <div class="banner_price">
            <div class="price_price">
              <span>R$</span>
              <span>40,00</span>
            </div>
            <div class="price_button">
              <button class="button_default">Saiba Mais</button>
            </div>
          </div>
        </div>
      </b-carousel-slide>
      <b-carousel-slide img-blank img-alt="Blank image">
        <div class="banner --dark-mode">
          <div class="banner_title">
            <div class="logo--banner">
              <div class="logo_gota"></div>
              <div class="logo_name"><h1>flooop</h1></div>
            </div>
            <div class="title_title">
              <h2 class="title_banner">Histórico Empresarial</h2>
            </div>
          </div>
          <div class="banner_description">
            <p>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação</p>
          </div>
          <div class="banner_price">
            <div class="price_price">
              <span>R$</span>
              <span>40,00</span>
            </div>
            <div class="price_button">
              <button class="button_default">Saiba Mais</button>
            </div>
          </div>
        </div>
      </b-carousel-slide>
    </b-carousel>

    <div v-for="(card, key) in apiCards" :key="key">
      {{ apiCards.title }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
