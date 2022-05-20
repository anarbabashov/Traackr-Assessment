<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import '@/styles/App.scss';
@import '@/styles/utils/helpers.scss';
</style>
