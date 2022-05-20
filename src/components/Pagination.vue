<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li class="pagination__arrow">
        <button
          type="button"
          class="pagination__arrowlink"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          aria-label="Go to the first page"
        >
          <img :src="arrows.leftDoubleIcon" alt="First" />
        </button>
      </li>
      <li class="pagination__arrow">
        <button
          type="button"
          class="pagination__arrowlink"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          aria-label="Previous"
        >
          <img :src="arrows.leftSingleIcon" alt="Arrow left" />
        </button>
      </li>
      <li class="pagination__item" v-for="page in pages" :key="page.id">
        <button
          type="button"
          class="pagination__itemlink"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ active: isPageActive(page.name) }"
          :aria-label="`Go to page number ${page.name}`"
        >
          {{ page.name }}
        </button>
      </li>
      <li class="pagination__arrow">
        <button
          type="button"
          class="pagination__arrowlink"
          @click="onClickNextPage"
          :disabled="isInLastPage"
          aria-label="Next"
        >
          <img :src="arrows.rightSingleIcon" alt="Arrow right" />
        </button>
      </li>
      <li class="pagination__arrow">
        <button
          type="button"
          class="pagination__arrowlink"
          @click="onClickLastPage"
          :disabled="isInLastPage"
          aria-label="Go to the last page"
        >
          <img :src="arrows.rightDoubleIcon" alt="Last" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      arrows: {
        leftSingleIcon: require('@/assets/svg/single-arron-left.svg'),
        rightSingleIcon: require('@/assets/svg/single-arron-right.svg'),
        leftDoubleIcon: require('@/assets/svg/double-caret-left.svg'),
        rightDoubleIcon: require('@/assets/svg/double-caret-right .svg'),
      },
    };
  },
  computed: {
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons + 1;
      }
      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(
        this.startPage + this.maxVisibleButtons - 1,
        this.totalPages
      );
    },
    pages() {
      const range = [];
      for (let i = this.startPage; i <= this.endPage; i += 1) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/components/Pagination.scss';
</style>
