<template>
  <div class="account">
    <div class="hero">
      <Heading :title="$route.name" />
    </div>
  </div>
</template>

<script>
import Heading from '../components/Heading.vue';
export default {
  name: 'Account',
  components: { Heading },
};
</script>
