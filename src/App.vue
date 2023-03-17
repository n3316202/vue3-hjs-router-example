<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/one">One</router-link> |
    <router-link to="/two">Two</router-link> |
    <router-link to="/three">Three</router-link> |
    <router-link :to="{ name: 'bar', params: { id: 123 } }">bar</router-link> |
    <router-link to="/bar/1234">bar2</router-link> |
    <router-link :to="{ name: 'bar3', params: { id: 123, name: '홍길동' } }"
      >bar3</router-link
    >
    |
  </nav>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
