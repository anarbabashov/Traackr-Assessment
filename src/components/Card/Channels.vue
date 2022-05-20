<template>
  <div class="channels">
    <ul class="channels__list">
      <li v-for="channel in channels" :key="channel.id" class="channels__item">
        <!-- For perspective. 
        Create component for tooltip with few types (image-icon or text) of props data -->
        <div class="tooltip">
          <Icon :name="channel.platform" />
          <span class="tooltip__text">{{ channel.handle }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'Channels',
  props: ['channels'],
  components: { Icon },
};
</script>

<style lang="scss">
@import '@/styles/components/Channels.scss';
</style>
