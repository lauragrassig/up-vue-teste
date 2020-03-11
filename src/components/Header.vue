<template>
  <header>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/">
      <div class="logo">
        <div class="logo_gota"></div>
        <div class="logo_name"><h1>flooop</h1></div>
      </div>
    </router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link to="/" class="header_link" exact>Aplicativos</router-link>
        <router-link to="/fontes" class="header_link">Fontes</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </header>
</template>

<script>
export default {
}

</script>
