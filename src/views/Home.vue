<template>
  <div class="home">
    <Banner/>
    <FilterSelect />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
import FilterSelect from '@/components/pages/FilterSelect.vue'

export default {
  name: 'Home',
  components: {
    Banner,
    FilterSelect
  }
}
</script>
