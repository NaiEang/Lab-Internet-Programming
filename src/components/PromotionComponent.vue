<template>
  <div class="promotion-container" :style="{ backgroundColor: bg }">
    <h2 class="promotion-title">{{ title }}</h2>

    <ShopButton v-if="buttonText && buttonColor" :color="buttonColor">
      {{ buttonText }}
    </ShopButton>

    <img :src="img" alt="Promotion Image" class="promotion-image" />
  </div>
</template>

<script>
import ShopButton from './ButtonComponent.vue'

export default {
  name: 'PromotionComponent',
  components: {
    ShopButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    img: String,
    bg: {
      type: String,
      default: '#ffffff',
    },
    buttonText: String,
    buttonColor: String,
  },
}
</script>

<style scoped>
.promotion-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 20px;
  border-radius: 10px;
  gap: 14px;
  position: relative;
  min-height: 160px;
  max-width: 480px;
  flex: 1;
}

.promotion-title {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.3;
  max-width: 60%;
  margin: 0;
  color: #253d4e;
  z-index: 2;
}

.promotion-image {
  position: absolute;
  bottom: 0;
  right: 0;

  width: 140 px;
  height: 140px;
  object-fit: contain;
}
</style>
