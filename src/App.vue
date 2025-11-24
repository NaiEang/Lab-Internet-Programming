<script>
import CategoryComponent from './components/CategoryComponent.vue'
import PromotionComponent from './components/PromotionComponent.vue'
import MainContainer from './components/MainContainer.vue'

const snackImage = new URL('@/assets/snack.png', import.meta.url).href
const peachImage = new URL('@/assets/peach.png', import.meta.url).href
const kiwiImage = new URL('@/assets/kiwi.png', import.meta.url).href
const appleImage = new URL('@/assets/apple.png', import.meta.url).href
const vegetableImage = new URL('@/assets/vegetables.png', import.meta.url).href
const burgerImage = new URL('@/assets/burger.png', import.meta.url).href
const cakeImage = new URL('@/assets/cake.png', import.meta.url).href
const orangeImage = new URL('@/assets/orange.png', import.meta.url).href
const headphoneImage = new URL('@/assets/headphone.png', import.meta.url).href
const plumImage = new URL('@/assets/plum.png', import.meta.url).href
const onionImage = new URL('@/assets/onion.jpg', import.meta.url).href
const veganImage = new URL('@/assets/chili.jpg', import.meta.url).href
const yogurtImage = new URL('@/assets/strawberryyogurt.png', import.meta.url).href
const arrowImage = new URL('@/assets/arrow.jpg', import.meta.url).href

export default {
  name: 'App',
  components: {
    CategoryComponent,
    PromotionComponent,
    MainContainer,
  },
  data() {
    return {
      snackImage,
      peachImage,
      kiwiImage,
      appleImage,
      vegetableImage,
      burgerImage,
      cakeImage,
      orangeImage,
      headphoneImage,
      plumImage,
      onionImage,
      veganImage,
      yogurtImage,
      arrowImage,
    }
  },
}
</script>

<template>
  <div class="big-wrap">
    <MainContainer />
    <div class="category-wrapper">
      <h1></h1>
      <CategoryComponent title="Cake&Milk" :item-count="14" :image="burgerImage" bg="#81B13D" />
      <CategoryComponent title="Peach" :item-count="17" :image="peachImage" bg="#FFFCEB" />
      <CategoryComponent title="Oganic Kiwi" :item-count="21" :image="kiwiImage" bg="#ECFFEC" />
      <CategoryComponent title="Red Apple" :item-count="68" :image="appleImage" bg="#FEEFEA" />
      <CategoryComponent title="Snack" :item-count="34" :image="snackImage" bg="#FFF3EB" />
      <CategoryComponent title="Black plum" :item-count="25" :image="plumImage" bg="#FFF3FF" />
      <CategoryComponent title="Vegetables" :item-count="65" :image="vegetableImage" bg="#F2FCE4" />
      <CategoryComponent title="Headphone" :item-count="33" :image="headphoneImage" bg="#FFFCEB" />
      <CategoryComponent title="Cake & Milk" :item-count="54" :image="cakeImage" bg="#F2FCE4" />
      <CategoryComponent title="Orange" :item-count="63" :image="orangeImage" bg="#FFF3FF" />
    </div>
    <div class="promotion-wrapper">
      <PromotionComponent
        title="Everyday Fresh & Clean with Our Products"
        :img="onionImage"
        bg="#F0E8D5"
        buttonText="Shop Now"
        buttonColor="#3BB77E"
        :arrow="arrowImage"
      />

      <PromotionComponent
        title="Make your Breakfast healthy and easy"
        :img="veganImage"
        bg="#E7EAF3"
        buttonText="Shop Now"
        buttonColor="#3BB77E"
        :arrow="arrowImage"
      />

      <PromotionComponent
        title="The best Organic Products Online"
        :img="yogurtImage"
        bg="#F3E8E8"
        buttonText="Shop Now"
        buttonColor="#FDC040"
        :arrow="arrowImage"
      />
    </div>
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
}

.big-wrap {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>
