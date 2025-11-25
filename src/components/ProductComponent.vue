<template>
  <div class="product-section">
    <div class="header">
      <h3>{{ title }}</h3>
    </div>

    <div class="product-grid">
      <!-- We loop through the products prop here -->
      <div v-for="product in products" :key="product.id" class="product-card">
        <!-- Badges (Hot / Sale) -->
        <div class="badges">
          <span v-if="product.isHot" class="badge hot">Hot</span>
          <span v-else-if="product.discount" class="badge sale">-{{ product.discount }}%</span>
        </div>

        <!-- Product Image -->
        <div class="img-wrapper">
          <img :src="product.imageUrl" :alt="product.name" />
        </div>

        <!-- Product Details -->
        <div class="content">
          <div class="category-text">{{ product.categoryName || 'Snack' }}</div>
          <h4 class="title">{{ product.name }}</h4>

          <div class="rating">
            ★★★★☆ <span class="rating-score">({{ product.rating || 4.0 }})</span>
          </div>

          <div class="bottom">
            <div class="price">
              <span class="current">${{ product.price }}</span>
              <span v-if="product.oldPrice" class="old">${{ product.oldPrice }}</span>
            </div>
            <button class="add-btn">Add +</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductComponent',
  props: {
    title: {
      type: String,
      default: 'Products',
    },
    products: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
.product-section {
  margin-top: 40px;
}
.header h3 {
  font-size: 28px;
  color: #253d4e;
  margin-bottom: 20px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 25px;
}

.product-card {
  border: 1px solid #ececec;
  border-radius: 15px;
  padding: 20px;
  position: relative;
  transition: 0.3s;
  background: #fff;
}
.product-card:hover {
  border: 1px solid #bce3c9;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.05);
}

.badges {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.badge {
  padding: 5px 10px;
  border-radius: 15px 0 20px 0;
  color: #fff;
  font-size: 12px;
}
.badge.hot {
  background-color: #f74b81;
}
.badge.sale {
  background-color: #67bcee;
}

.img-wrapper {
  text-align: center;
  margin-bottom: 15px;
}
.img-wrapper img {
  max-width: 100%;
  height: 140px;
  object-fit: contain;
}

.category-text {
  font-size: 12px;
  color: #adadad;
  margin-bottom: 5px;
}
.title {
  font-size: 16px;
  color: #253d4e;
  margin: 0 0 10px;
}
.rating {
  color: #ffc107;
  font-size: 14px;
  margin-bottom: 10px;
}
.rating-score {
  color: #b6b6b6;
  font-size: 12px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.price .current {
  color: #3bb77e;
  font-size: 18px;
  font-weight: bold;
  margin-right: 10px;
}
.price .old {
  color: #adadad;
  text-decoration: line-through;
  font-size: 14px;
}
.add-btn {
  background-color: #def9ec;
  color: #3bb77e;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
}
.add-btn:hover {
  background-color: #3bb77e;
  color: #fff;
}
</style>
