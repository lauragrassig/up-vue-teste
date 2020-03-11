<template>
  <div id="app">
    <Header/>
    <div class="space_header"></div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>
