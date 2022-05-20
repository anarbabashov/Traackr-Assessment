<template>
  <div class="influencers">
    <div class="hero">
      <Heading :expandInput="expanded" :title="$route.name" />
      <Search
        :modelValue="search"
        @update:modelValue="search = $event"
        @expanded-event="setExpanded"
      />
    </div>
    <div v-if="filteredInfluencers.length">
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
      <Pagination
        :total-pages="pages"
        :total="filteredInfluencers.length"
        :current-page="currentPage"
        @pagechanged="onPageChange"
      />
    </div>
    <div class="error-message" v-else>
      Sorry, we couldn't find any <br />
      influencer for your search.
    </div>
  </div>
</template>

<script>
import { influencers } from '/data/data.json';
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
    filteredInfluencers() {
      return this.influencers.filter((card) => {
        return (
          card.name.toLowerCase().match(this.search.toLowerCase()) ||
          card.description.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
    pageStart() {
      return (this.currentPage - 1) * this.cardsPerPage;
    },
    pages() {
      return Math.ceil(this.filteredInfluencers.length / this.cardsPerPage);
    },
  },
  methods: {
    onPageChange(page) {
      this.currentPage = page;
    },
    setExpanded(event) {
      this.expanded = event;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/views/Influencers.scss';
</style>
