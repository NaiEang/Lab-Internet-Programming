<template>
  <button :style="{ backgroundColor: color }">
    <slot />
    <span class="arrow-icon">→</span>
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
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}
button:hover {
  opacity: 0.9;
}

.arrow-icon {
  font-size: 18px;
  line-height: 1;
}
</style>
