<template>
  <div class="dashboard">
    <div class="hero">
      <Heading :title="$route.name" />
    </div>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue';
export default {
  name: 'Dashboard',
  components: { Heading },
};
</script>
