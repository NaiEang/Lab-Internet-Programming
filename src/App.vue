<script>
import { useProductStore } from './stores/product'
import MenuComponent from './components/MenuComponent.vue'
// import ProductComponent from './components/ProductComponent.vue'
import PromotionComponent from './components/PromotionComponent.vue'
import CategoryComponent from './components/CategoryComponent.vue'

export default {
  name: 'App',
  components: {
    MenuComponent,
    CategoryComponent,
    // ProductComponent,
    PromotionComponent,
  },
  setup() {
    const productStore = useProductStore()

    return {
      productStore,
    }
  },
  async mounted() {
    await this.productStore.fetchAllData()
  },
}
</script>

<template>
  <div class="big-wrap">
    <MenuComponent title="Featured Categories" />

    <div class="category-wrapper">
      <CategoryComponent
        v-for="category in productStore.categories"
        :key="category.id"
        :title="category.name"
        :itemCount="category.productCount"
        :image="'http://localhost:3000/' + category.image"
        :bg="category.color"
      />
    </div>
    <div class="promotion-wrapper">
      <PromotionComponent
        v-for="promo in productStore.promotions"
        :key="promo.id"
        :title="promo.title"
        :img="'http://localhost:3000/' + promo.image"
        :bg="promo.color"
        buttonText="Shop Now"
        :buttonColor="promo.buttonColor || '#3BB77E'"
      />
    </div>

    <!--
      Task 2: Product Component
      New section for Popular Products
    -->
    <!-- <ProductComponent title="Popular Products" :products="popularProducts" /> -->
  </div>
</template>

<style scoped>
.category-wrapper {
  display: flex;
  flex-direction: row;
  gap: 18px;
}

.promotion-wrapper {
  display: flex;
  flex-direction: row;
  gap: 18px;
  flex-wrap: wrap;
}

.big-wrap {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
