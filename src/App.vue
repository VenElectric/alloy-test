<script setup lang="ts">
import CustomerForm from "./components/CustomerForm.vue";
</script>

<template>
  <CustomerForm></CustomerForm>
  <small class="photo-cred"
    >Photo by
    <a
      href="https://unsplash.com/@minkus?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >Minku Kang</a
    >
    on
    <a
      href="https://unsplash.com/t/interiors?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      >Unsplash</a
    ></small
  >
</template>

<style>
body {
  background-image: url("./assets/minku-kang-DH-mVew20lw-unsplash.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:cover;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
.photo-cred {
  margin-right: 0;
  margin-left: auto;
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
