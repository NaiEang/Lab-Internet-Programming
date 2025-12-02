<script>
import HeaderSection from './components/HeaderSection.vue'
import MenuSection from './components/MenuSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    HeaderSection,
    MenuSection,
    FooterSection,
  },
}
</script>

<template>
  <div class="wrapper">
    <HeaderSection />
    <MenuSection />
    <FooterSection />
  </div>
</template>

<style scope>
.wrapper {
  flex-direction: column;
}
</style>
