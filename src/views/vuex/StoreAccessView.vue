<template>
  <p>Count : {{ count }}</p>
  <p>cartCount : {{ cartCount }}</p>
  <button type="button" @click="increment">Increment</button>
  <button type="button" @click="addCart">카트에 물건 추가</button>
</template>
<script>
export default {
  computed: {
    count() {
      return this.$store.state.count;
    },
    cartCount() {
      return this.$store.getters.cartCount;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    addCart() {
      this.$store.dispatch("addCart");
    },
  },
};
</script>
