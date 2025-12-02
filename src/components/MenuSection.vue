<template>
  <div class="wrapper">
    <div class="body-container">
      <router-link to="/menu" class="section">Menu</router-link>
      <router-link to="/section1" class="section">Section 1</router-link>
      <router-link to="/section2" class="section">Section 2</router-link>
      <router-link to="/section3" class="section">Section 3</router-link>
      <router-link to="/section4" class="section">Section 4</router-link>
    </div>
    <div class="body">
      <p class="body-text">Welcome to Page 1</p>
    </div>
  </div>
</template>

<style scope>
.body-container {
  height: 500px;
  position: fixed;
  display: flex;
  width: 280px;
  border: 1px solid black;
  border-width: 2px;
  float: left;
  flex-direction: column;
  flex-shrink: 0;
}
.section {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  border-bottom: 2px solid black;
  padding: 13px;
  flex-direction: column;
}
.body {
  position: fixed;
  padding: 40px;
  margin-left: 280px;
  width: 1220px;
  height: 500px;
  border: 2px solid black;
  text-align: center;
}
.wrapper {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}
.body-text {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 26px;
}
</style>
