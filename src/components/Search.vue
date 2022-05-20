<template>
  <form class="search" :class="{ expanded: expanded }" @click="expandInput">
    <button class="search__submit">
      <img :src="searchIcon" alt="Search icon" />
    </button>
    <input
      type="text"
      class="search__input"
      placeholder="Search for an influencer"
      v-on:input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
    />
  </form>
</template>

<script>
export default {
  props: {
    modelValue: String,
  },
  data() {
    return {
      expanded: false,
      searchIcon: require('@/assets/svg/search.svg'),
    };
  },
  methods: {
    expandInput() {
      this.expanded = true;
      this.$emit('expanded-event', this.expanded);
    },
    close(e) {
      !this.$el.contains(e.target)
        ? (this.expanded = false)
        : (this.expanded = true);
      this.$emit('expanded-event', this.expanded);
    },
  },
  mounted() {
    document.addEventListener('click', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close);
  },
};
</script>

<style lang="scss">
@import '@/styles/components/Search.scss';
</style>
