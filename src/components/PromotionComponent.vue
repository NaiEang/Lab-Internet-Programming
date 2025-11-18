<template>
  <div class="promotion-container" :style="{ backgroundColor: bg }">
    <h2 class="promotion-title">{{ title }}</h2>

    <ShopButton v-if="buttonText && buttonColor && arrow" :color="buttonColor" :arrow="arrow">
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
  },
  bg: {
    type: String,
    default: '#ffffff',
  },
  buttonText: String,
  buttonColor: String,
  arrow: String,
}
</script>

<style scoped>
.promotion-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  border-radius: 10px;
  gap: 14px;
}

.promotion-title {
  font-size: 20 px;
  font-weight: 700;
  line-height: 1.3;
}

.promotion-imgae {
  width: 120 px;
  object-fit: contain;
}
</style>
