<template>
  <div class="head-container">
    <h3 class="main-title">Featured Categories</h3>

    <div class="header-list">
      <span v-for="item in categories" :key="item" class="category-text"> {{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        'All',
        'Milk & Dairy',
        'Coffee & Teas',
        'Pet Foods',
        'Meats',
        'Vegetables',
        'Fruits',
      ],
    }
  },
}
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  font-family: 'Quicksand', sans-serif;
}
.main-title {
  font-size: 24px;
  font-weight: 700;
  color: #253d4e;
}
.header-list {
  display: flex;
  gap: 20px;
}
.category-text {
  font-size: 14px;
  font-weight: 600;
  color: #253d4e;
}
</style>
