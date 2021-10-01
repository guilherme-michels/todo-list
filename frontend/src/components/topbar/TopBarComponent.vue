<template>
  <div id="app">
    <ul class="nav">
      <li><a>Home</a></li>
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'login' }">Login</router-link>
      </li>
      <li v-if="!loggedIn">
        <router-link :to="{ name: 'register' }">Register</router-link>
      </li>
      <li v-if="loggedIn">
        <router-link :to="{ name: 'logout' }">Logout</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "topBar",
  computed: {
        loggedIn() {
      return this.$store.getters.loggedIn
    }
  }
};
</script>

<style>

.flex-center {
  display: flex;
  justify-content: center;
}
.nav {
  display: flex;
  list-style: none;
  justify-content: center;
  padding: 15px 0;
}
.nav a {
  color: #000000;
  padding: 0 25px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
