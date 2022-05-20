<template>
  <form class="search" :class="{ expanded: expanded }" @click="expandInput">
    <button class="search__submit">
      <img :src="searchIcon" alt="Search icon" />
    </button>
    <input
      type="text"
      class="search__input"
      placeholder="Search for an influencer"
      v-on:input="inputHandler"
      :value="modelValue"
    />
  </form>
</template>

<script>
import debounce from 'lodash.debounce';
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
  created() {
    this.inputHandler = debounce((event) => {
      this.$emit('update:modelValue', event.target.value);
    }, 300);
  },
  beforeUnmount() {
    this.inputHandler.cancel();
  },
  methods: {
    // Emmiting our Bool value to the parent
    expandInput() {
      this.expanded = true;
      this.$emit('expanded-event', this.expanded);
    },
    // Setting the Bool value and emmitin it
    close(e) {
      !this.$el.contains(e.target)
        ? (this.expanded = false)
        : (this.expanded = true);
      this.$emit('expanded-event', this.expanded);
    },
  },
  mounted() {
    // Close search if click event out of search component
    document.addEventListener('click', this.close);
  },
  beforeDestroy() {
    // Remove the click event for search component
    document.removeEventListener('click', this.close);
  },
};
</script>

<style lang="scss">
@import '@/styles/components/Search.scss';
</style>
