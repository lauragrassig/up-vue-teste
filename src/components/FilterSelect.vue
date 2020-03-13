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
              <span>{{fonte.title}}</span>
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
            <h3>{{card.title}}</h3>
          </div>
          <div class="card_description">
            <p>{{card.description}}</p>
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
            <h3>{{fonte.title}}</h3>
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
          typeModel: 'profissional',
          price: '10,00'
        },
        {
          title: 'Enriquecimenro de Dados',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-coins',
          type: 'lancamento',
          typeModel: 'profissional',
          price: '40,00'
        },
        {
          title: 'upLink',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-share-alt',
          type: 'lancamento',
          typeModel: 'profissional',
          price: '40,00'
        },
        {
          title: 'Validador de RG',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'far fa-check-square',
          type: 'lancamento',
          typeModel: 'profissional',
          price: '40,00'
        },
        {
          title: 'Veículo',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-car',
          type: 'lancamento',
          typeModel: 'profissional',
          price: '40,00'
        },
        {
          title: 'Comparador Societário',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-network-wired',
          type: 'preco',
          typeModel: 'profissional',
          price: '29,00'
        },
        {
          title: 'Diários Oficiais',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-search',
          type: 'preco',
          typeModel: 'profissional',
          price: '29,00'
        },
        {
          title: 'Dossiês',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'far fa-file',
          type: 'preco',
          typeModel: 'profissional',
          price: '05,00'
        },
        {
          title: 'Ficha Cadastral',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-address-card',
          type: 'preco',
          typeModel: 'profissional',
          price: '29,00'
        },
        {
          title: 'Históricop Empresarial',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-user-secret',
          type: 'preco',
          typeModel: 'profissional',
          price: '29,00'
        },
        {
          title: 'upMap',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-map-marker-alt',
          type: 'preco',
          typeModel: 'profissional',
          price: '29,00'
        },
        {
          title: 'upMatch',
          description:
            'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
          icon: 'fas fa-bullseye',
          type: 'preco',
          typeModel: 'profissional',
          price: '29,00'
        }
      ],
      apiFonte: [{
        title: 'Profissional',
        description: '',
        icon: 'fas fa-globe',
        typeModel: 'profissional',
        type: 'preco',
        price: '29,00'
      }, {
        title: 'Reguladores',
        description: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
        icon: 'fas fa-briefcase',
        typeModel: 'reguladores',
        type: 'preco',
        price: '40,00'
      }, {
        title: 'Sócio Ambiental',
        description: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
        icon: 'fas fa-tree',
        typeModel: 'ambiental',
        type: 'lancamento',
        price: '40,00'
      }, {
        title: 'Jurídico',
        description: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
        icon: 'fas fa-gavel',
        typeModel: 'juridico',
        type: 'preco',
        price: '40,00'
      }, {
        title: 'Listas Restritivas',
        description: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
        icon: 'fas fa-ban',
        typeModel: 'restrititivas',
        type: 'preco',
        price: '30,00'
      }, {
        title: 'Mídia/Internet',
        description: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
        icon: 'fas fa-globe-americas',
        typeModel: 'midia',
        type: 'lancamento',
        price: '40,00'
      }, {
        title: 'Bens e Imóveis',
        description: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
        icon: 'fas fa-gem',
        typeModel: 'imoveis',
        type: 'preco',
        price: '50,00'
      }, {
        title: 'Cadastro',
        description: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
        icon: 'fas fa-male',
        typeModel: 'cadastro',
        type: 'preco',
        price: '40,00'
      }, {
        title: 'Financeiro',
        description: 'O aplicativo Balanço Patrimonial realiza a consulta de todos os balanços que são publicados nos diários oficiais de empresas S.A., de capital aberto e limitadas (LTDA) de grande porte.',
        icon: 'fas fa-piggy-bank',
        typeModel: 'financeiro',
        type: 'preco',
        price: '100,00'
      }]
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
      this.apiCards.sort((a, b) => (a.type > b.type) ? 1 : -1)
      this.apiFonte.sort((a, b) => (a.type > b.type) ? 1 : -1)

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
