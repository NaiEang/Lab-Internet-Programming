<template>
  <div class="container" :style="{ backgroundColor: bg }">
    <img :src="image" />
    <h3>{{ title }}</h3>
    <span class="count">{{ itemCount }} items</span>
  </div>
</template>

<script>
export default {
  name: 'CategoryComponent',
  props: {
    title: {
      type: String,
      required: true,
    },
    itemCount: {
      type: Number,
      required: true,
    },
    image: {
      required: true,
    },
    bg: {
      type: String,
      required: true,
      default: '#ffff',
    },
  },
}
</script>

<style scoped>
.container {
  border: 1px solid bg;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: bg;
}

.count {
  color: gray;
  font-size: 12px;
}
</style>
