<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <router-link to="/">Home</router-link>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link to="/about">About</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
}
</script>
