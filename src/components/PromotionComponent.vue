<template>
  <div class="promotion-container" :style="{ backgroundColor: bg }">
    <img :src="img" alt="Promotion Image" class="promotion-image" />
    <h2 class="promotion-title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'PromotionComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    img: {
      required: true,
    },
    bg: {
      type: String,
      required: false,
      default: '#ffffff',
    },
  },
}
</script>

<style scoped>
.promotion-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: bg;
}
</style>
