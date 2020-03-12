<template>
  <div>
    teste
    teste
    {{ currentFonte.title}}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      currentFonte: ''
    }
  },
  created: function () {
    this.currentFonte = JSON.parse(localStorage.getItem('currentFont'))
  }
}
</script>
