<template>
  <div>
    teste
  </div>
</template>

<script>
export default {
  methods: {
    teste: function () {
      this.currentFonte = JSON.parse(localStorage.getItem('currentFonte'))
    }
  }
}
</script>
