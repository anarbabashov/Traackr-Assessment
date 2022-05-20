<template>
  <div class="heading" :class="{ hide: expandInput }">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ['title', 'expandInput'],
};
</script>

<style lang="scss">
@import '@/styles/components/Heading.scss';
</style>
