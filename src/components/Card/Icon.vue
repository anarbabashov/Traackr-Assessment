<template>
  <img :src="icon" :alt="name" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      icon: require(`@/assets/svg/channels/${this.name}.svg`),
    };
  },
};
</script>
