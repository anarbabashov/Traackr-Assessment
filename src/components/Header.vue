<template>
  <header class="header" :class="{ 'header--menu-opened': collapsed }">
    <!-- Logo -->
    <div class="logo"></div>
    <!-- Mobile toggle humburger button -->
    <div class="humburger humburger--isMobile" @click="toggleMenu">
      <div class="humburger__button">
        <div class="humburger__bar humburger__bar--topBar"></div>
        <div class="humburger__bar humburger__bar--btmBar"></div>
      </div>
    </div>
    <!-- Navigation -->
    <nav class="nav nav--isDesktop">
      <ul class="nav__list">
        <li class="nav__item"><router-link to="/">Dashboard</router-link></li>
        <li class="nav__item">
          <router-link to="/influencers">Influencer List</router-link>
        </li>
        <li class="nav__item">
          <a href="javascript:void(0);"><img :src="logo" alt="Logo" /></a>
        </li>
      </ul>
    </nav>
    <!-- Mobile menu -->
    <ul class="menu">
      <li class="menu__item"><router-link to="/">Dashboard</router-link></li>
      <li class="menu__item">
        <router-link to="/influencers">Influencer List</router-link>
      </li>
      <li class="menu__item">
        <router-link to="/account">My Account</router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      logo: require('@/assets/svg/avatar-placeholder.svg'),
    };
  },
  methods: {
    toggleMenu() {
      this.collapsed = this.collapsed ? false : true;
    },
  },
  watch: {
    $route() {
      this.collapsed = false;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/components/Header.scss';
</style>
