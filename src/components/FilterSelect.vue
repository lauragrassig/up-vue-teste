<template>
  <div>
    <b-container>
      <div class="select">
        <span>Ordenar</span>
        <select name="select_aplicativos" v-model="attbValue" @change="filterSelecteds()">
          <option value="todos">Todos</option>
          <option value="lancamento">Lançamento</option>
          <option value="preco">Menor Preço</option>
        </select>
      </div>
      <div class="wrapper_cards">
        <div v-for="(card, key) in apiCards" :key="key" class="card" :data-eventtype="card.type">
          <div class="card_icon">
            <i :class="card.icon"></i>
          </div>
          <div class="card_title">
            <h3>{{card.title}}</h3>
          </div>
          <div class="card_description">
            <p>{{card.description}}</p>
          </div>
          <div class="card_more">
            <div class="more_price">R$ 29,99</div>
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
  data () {
    return {
      apiCards: [
        {
          title: 'Balanço Patrimonial',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'far fa-money-bill-alt',
          type: 'preco',
          price: '29,00'
        },
        {
          title: 'Enriquecimenro de Dados',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-coins',
          type: 'lancamento',
          price: '40,00'
        },
        {
          title: 'upLink',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-share-alt',
          type: 'lancamento',
          price: '40,00'
        },
        {
          title: 'Validador de RG',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'far fa-check-square',
          type: 'lancamento',
          price: '40,00'
        },
        {
          title: 'Veículo',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-car',
          type: 'lancamento',
          price: '40,00'
        },
        {
          title: 'Comparador Societário',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-network-wired',
          type: 'preco',
          price: '29,00'
        },
        {
          title: 'Diários Oficiais',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-search',
          type: 'preco',
          price: '29,00'
        },
        {
          title: 'Dossiês',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'far fa-file',
          type: 'preco',
          price: '29,00'
        },
        {
          title: 'Ficha Cadastral',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-address-card',
          type: 'preco',
          price: '29,00'
        },
        {
          title: 'Históricop Empresarial',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-user-secret',
          type: 'preco',
          price: '29,00'
        },
        {
          title: 'upMap',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-map-marker-alt',
          type: 'preco',
          price: '29,00'
        },
        {
          title: 'upMatch',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-bullseye',
          type: 'preco',
          price: '29,00'
        }
      ]
    }
  },
  attbValue: '',
  methods: {
    filterSelecteds: function () {
      const selected = this.attbValue
      const cardList = document.querySelectorAll('.card')

      this.showSelectAll(cardList)

      // eslint-disable-next-line no-unused-expressions
      selected !== 'todos' ? this.displayOnly(selected, cardList) : null
    },
    showSelectAll (cardList) {
      cardList.forEach(card => {
        card.classList.contains('-inactive') &&
          card.classList.remove('-inactive')
      })
    },
    displayOnly (value, cardList) {
      cardList.forEach(card => {
        if (card.attributes.getNamedItem('data-eventtype').value !== value) {
          !card.classList.contains('-inactive') && card.classList.add('-inactive')
        }
      })
    },
    openSaibaMais (key) {
      localStorage.setItem('currentFont', JSON.stringify(this.apiCards[key]))
    }
  }
}
</script>
