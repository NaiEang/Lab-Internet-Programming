<template>
  <div class="menu-section">
    <div class="header">
      <h3>{{ title }}</h3>
      <div class="links">
        <a href="#">All</a>
        <a href="#">Milks & Dairies</a>
        <a href="#">Coffees & Teas</a>
        <a href="#">Pet Foods</a>
        <a href="#">Meats</a>
        <a href="#">Vegetables</a>
        <a href="#">Fruits</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: {
    title: {
      type: String,
      default: 'Featured Categories',
    },
  },
}
</script>

<style scoped>
.menu-section {
  margin-bottom: 10 px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h3 {
  font-size: 24px;
  color: #253d4e;
}
.links a {
  margin-left: 20px;
  text-decoration: none;
  color: #253d4e;
  font-size: 14px;
}
</style>
