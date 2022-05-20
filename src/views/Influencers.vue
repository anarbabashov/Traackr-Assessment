<template>
  <div class="influencers">
    <!-- Hero contains sections: Heading (h1), Search -->
    <div class="hero">
      <Heading :expandInput="expanded" :title="$route.name" />
      <Search
        :modelValue="search"
        @update:modelValue="search = $event"
        @expanded-event="setExpanded"
      />
    </div>
    <div v-if="filteredInfluencers.length">
      <!-- List of our influencers -->
      <div class="list">
        <Card
          v-for="influencer in filteredInfluencers.slice(
            pageStart,
            pageStart + cardsPerPage
          )"
          :key="influencer.id"
          :influencer="influencer"
        />
      </div>
      <!-- Pagination -->
      <Pagination
        :total-pages="pages"
        :total="filteredInfluencers.length"
        :current-page="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
    <!-- Handle error message if search return nothing -->
    <div class="error-message" v-else>
      Sorry, we couldn't find any <br />
      influencer for your search.
    </div>
  </div>
</template>

<script>
import { influencers } from '/data/data.json'; // Our mock data
import Heading from '../components/Heading.vue';
import Search from '../components/Search.vue';
import Card from '../components/Card.vue';
import Pagination from '../components/Pagination.vue';
export default {
  name: 'Influencers',
  components: { Heading, Search, Card, Pagination },
  data() {
    return {
      influencers: influencers,
      search: '',
      cardsPerPage: 6,
      currentPage: 1,
      expanded: false,
    };
  },
  computed: {
    // Filtered array of influencers
    filteredInfluencers() {
      return this.influencers.filter((card) => {
        return (
          card.name.toLowerCase().match(this.search.toLowerCase()) ||
          card.description.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
    // Returning count items per page
    pageStart() {
      return (this.currentPage - 1) * this.cardsPerPage;
    },
    // Returning count of pages
    pages() {
      return Math.ceil(this.filteredInfluencers.length / this.cardsPerPage);
    },
  },
  methods: {
    // Set the current page
    onPageChange(page) {
      this.currentPage = page;
    },
    // Get the emmited data from search component
    setExpanded(event) {
      this.expanded = event;
    },
  },
  watch: {
    // Set the first page to search on
    search() {
      this.currentPage = 1;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/views/Influencers.scss';
</style>
