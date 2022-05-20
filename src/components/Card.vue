<template>
  <div class="card">
    <div class="card__container">
      <div class="profile">
        <div class="profile__headline">
          <div class="profile__avatar">
            <div
              class="profile__avatarImage"
              :class="influencer.is_aligned ? 'is-aligned' : ''"
            >
              <img :src="influencer.avatar" :alt="influencer.name" />
            </div>
            <div class="profile__audience hidden-xs hidden-sm hidden-md">
              <img :src="userIcon" :alt="influencer.audience" />{{ audience }}
            </div>
          </div>
          <div class="profile__title">
            <div class="profile__name">{{ influencer.name }}</div>
            <Channels
              class="hidden-xs hidden-sm hidden-md"
              :channels="channels"
            />
          </div>
        </div>
        <Channels class="hidden-lg" :channels="channels" />
      </div>
      <div class="description">{{ influencer.description }}</div>
      <div class="metrics">
        <div class="metrics__item hidden-lg">
          <span>Audience:</span> {{ audience }}
        </div>
        <div class="metrics__item">
          <span>Reach:</span> {{ influencer.reach }}
        </div>
        <div class="metrics__item">
          <span>Resonance:</span> {{ influencer.resonance }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Channels from '../components/Card/Channels.vue';

export default {
  name: 'Card',
  props: ['influencer'],
  components: { Channels },
  data() {
    return {
      channels: this.influencer.channels,
      userIcon: require('@/assets/svg/user.svg'),
    };
  },
  computed: {
    audience() {
      const str = String(this.influencer.audience).slice(5);
      return Number(str).toFixed(1) + 'k';
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/components/Card.scss';
</style>
