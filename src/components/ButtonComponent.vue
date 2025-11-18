<template>
  <button :style="{ backgroundColor: color }">
    <slot />
    <img :src="arrow" alt="arrow" />
  </button>
</template>

<script>
export default {
  name: 'ShopButton',
  props: {
    color: String,
    arrow: String,
  },
}
</script>

<style scoped>
button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
}

img {
  width: 14px;
  height: 14px;
}
</style>
