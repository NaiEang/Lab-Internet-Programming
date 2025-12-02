<template>
  <div class="header-container">
    <h1 class="header-title">Header</h1>
    <div class="page-container">
      <router-link to="/page1" class="page-style">Page1</router-link>
      <router-link to="/page2" class="page-style">Page2</router-link>
      <router-link to="/page3" class="page-style">Page3</router-link>
    </div>
  </div>
</template>

<style scope>
.header-container {
  margin-bottom: 1px;
  border-radius: 0;
  border-bottom: 1px solid #cc6666;
  height: 80px;
  display: flex;
  width: 1500px;
  border: 1px solid black;
  border-width: 2px;
  padding: 0 25px;
  justify-content: space-between;
  flex-direction: row;
}
.header-title {
  align-items: center;
  display: flex;
}
.page-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
  gap: 40px;
}
.page-style {
  font-size: 23px;
  font-family: Arial, Helvetica, sans-serif;
}
.wrapper {
  display: flex;
  flex-direction: row;
}
</style>
