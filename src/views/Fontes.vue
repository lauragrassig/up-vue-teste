<template>
  <div class="wrapper_fontes">
    <Banner />
    <FilterSelect />
  </div>
</template>

<script>
import Banner from '../components/Banner'
import FilterSelect from '@/components/pages/FilterSelect.vue'

export default {
  components: {
    Banner,
    FilterSelect
  }
}
</script>
