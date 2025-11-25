<template>
  <div class="product-section">
    <div class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <div class="badges">
          <span v-if="product.discountPercentage" class="badge percent">
            {{ product.discountPercentage }}
          </span>
          <span v-else-if="product.isHot" class="badge hot">Hot</span>
          <span v-else-if="product.discount" class="badge sale">-{{ product.discount }}%</span>
        </div>

        <div class="img-wrapper">
          <img
            :src="'http://localhost:3000/uploads/' + product.image"
            :alt="product.name"
            loading="lazy"
          />
        </div>

        <div class="content">
          <div class="vendor">Hodo Foods</div>
          <div class="category-text">{{ product.categoryName || 'Snack' }}</div>
          <h4 class="title">{{ product.name }}</h4>

          <div class="rating">
            <span class="stars">★★★★★</span>
            <span class="rating-score">({{ product.rating || 4.0 }})</span>
          </div>

          <div class="price">
            <span class="current">${{ product.price }}</span>
            <span v-if="product.oldPrice" class="old">${{ product.oldPrice }}</span>
          </div>

          <!-- Quantity + Add Button -->
          <div class="bottom">
            <div class="quantity">
              <button @click="decrement(product)">-</button>
              <input type="text" :value="product.qty || 1" readonly />
              <button @click="increment(product)">+</button>
            </div>
            <button class="add-btn" @click="addToCart(product)">Add +</button>
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
    products: { type: Array, required: true },
  },
  methods: {
    increment(product) {
      product.qty = (product.qty || 1) + 1
    },
    decrement(product) {
      if ((product.qty || 1) > 1) product.qty -= 1
    },
    addToCart(product) {
      this.$emit('add-to-cart', { ...product })
    },
  },
}
</script>

<style scoped>
.product-section {
  margin-top: 40px;
}

.section-title {
  font-size: 28px;
  color: #253d4e;
  margin-bottom: 30px;
  font-weight: 700;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 30px;
}

.product-card {
  border: 1px solid #ececec;
  border-radius: 15px;
  padding: 20px;
  background: #fff;
  position: relative;
  transition: all 0.3s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
}

.product-card:hover {
  border-color: #bce3c9;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

.badges {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 10;
}

.badge {
  display: block;
  padding: 4px 10px;
  border-radius: 15px 0 15px 0;
  font-size: 11px;
  font-weight: bold;
  color: white;
  margin-bottom: 6px;
}

.badge.percent {
  background: #3bb77e;
}

.badge.hot {
  background: #f74b81;
}

.badge.sale {
  background: #67bcee;
}

.img-wrapper {
  text-align: center;
  margin-bottom: 16px;
}

.img-wrapper img {
  height: 140px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
}

.vendor {
  font-size: 12px;
  color: #7a9c59;
  margin-bottom: 4px;
}

.category-text {
  font-size: 13px;
  color: #adadad;
  margin-bottom: 6px;
}

.title {
  font-size: 15px;
  color: #253d4e;
  margin: 0 0 8px;
  line-height: 1.3;
  height: 38px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.rating {
  margin-bottom: 10px;
}

.stars {
  color: #ffc107;
  font-size: 15px;
  letter-spacing: 1px;
}

.rating-score {
  color: #b6b6b6;
  font-size: 12px;
  margin-left: 4px;
}

.price {
  margin-bottom: 12px;
}

.price .current {
  color: #3bb77e;
  font-size: 20px;
  font-weight: bold;
}

.price .old {
  color: #adadad;
  text-decoration: line-through;
  font-size: 14px;
  margin-left: 8px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.quantity {
  display: flex;
  align-items: center;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  overflow: hidden;
  font-size: 14px;
}

.quantity button {
  width: 32px;
  height: 36px;
  border: none;
  background: #f8f8f8;
  font-size: 18px;
  cursor: pointer;
}

.quantity input {
  width: 40px;
  height: 36px;
  text-align: center;
  border: none;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
  background: white;
}

.add-btn {
  background: #def9ec;
  color: #3bb77e;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.add-btn:hover {
  background: #3bb77e;
  color: white;
}
</style>
